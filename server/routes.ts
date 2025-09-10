import type { Express } from "express";
import { storage } from "./storage";
import { insertNewsletterSchema, insertBlogSubscriptionSchema, insertContactSchema } from "@shared/schema";
import { z } from "zod";
import * as path from "path";
import {
  ObjectStorageService,
  ObjectNotFoundError,
} from "./objectStorage";


export async function registerRoutes(app: Express): Promise<void> {
  // Newsletter subscription endpoint
  app.post("/api/newsletter", async (req, res) => {
    try {
      const data = insertNewsletterSchema.parse(req.body);
      
      // Check if email already exists
      const existing = await storage.getNewsletterByEmail(data.email);
      if (existing) {
        return res.status(400).json({ message: "Email already subscribed" });
      }
      
      const newsletter = await storage.createNewsletterSubscription(data);
      res.json({ message: "Successfully subscribed to newsletter", newsletter });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid email format" });
      }
      res.status(500).json({ message: "Failed to subscribe to newsletter" });
    }
  });

  // Blog subscription endpoint
  app.post("/api/blog-subscription", async (req, res) => {
    try {
      const data = insertBlogSubscriptionSchema.parse(req.body);
      
      // Check if email already exists
      const existing = await storage.getBlogSubscriptionByEmail(data.email);
      if (existing) {
        return res.status(400).json({ message: "Email already subscribed to blog updates" });
      }
      
      const blogSubscription = await storage.createBlogSubscription(data);
      res.json({ message: "Successfully subscribed to blog updates", blogSubscription });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid email format" });
      }
      res.status(500).json({ message: "Failed to subscribe to blog updates" });
    }
  });

  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const data = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(data);
      res.json({ message: "Message sent successfully", contact });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Please fill in all required fields" });
      }
      res.status(500).json({ message: "Failed to send message" });
    }
  });

  // Get all contacts (for admin purposes)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      res.status(500).json({ message: "Failed to retrieve contacts" });
    }
  });

  // Admin endpoints for subscriber lists
  app.get("/api/admin/newsletter-subscribers", async (req, res) => {
    try {
      const subscribers = await storage.getAllNewsletterSubscribers();
      res.json(subscribers);
    } catch (error) {
      res.status(500).json({ message: "Failed to retrieve newsletter subscribers" });
    }
  });

  app.get("/api/admin/blog-subscribers", async (req, res) => {
    try {
      const subscribers = await storage.getAllBlogSubscribers();
      res.json(subscribers);
    } catch (error) {
      res.status(500).json({ message: "Failed to retrieve blog subscribers" });
    }
  });

  // Serve email templates
  app.get("/email-templates/:templateName", (req, res) => {
    const { templateName } = req.params;
    const allowedTemplates = [
      'monthly-newsletter-template.html',
      'blog-notification-template.html',
      'newsletter-template.html'
    ];
    
    if (!allowedTemplates.includes(templateName)) {
      return res.status(404).send('Template not found');
    }
    
    res.sendFile(path.join(process.cwd(), 'email-templates', templateName));
  });

  // Object storage endpoints for video serving
  app.get("/objects/:objectPath(*)", async (req, res) => {
    const objectStorageService = new ObjectStorageService();
    try {
      const objectFile = await objectStorageService.getObjectEntityFile(
        req.path,
      );
      objectStorageService.downloadObject(objectFile, res);
    } catch (error) {
      console.error("Error accessing object:", error);
      if (error instanceof ObjectNotFoundError) {
        return res.sendStatus(404);
      }
      return res.sendStatus(500);
    }
  });

  // Direct bucket file access for files in bucket root
  app.get("/bucket-files/:fileName(*)", async (req, res) => {
    const bucketId = process.env.DEFAULT_OBJECT_STORAGE_BUCKET_ID;
    if (!bucketId) {
      return res.status(500).json({ error: "Bucket not configured" });
    }
    
    try {
      const { objectStorageClient } = await import("./objectStorage");
      const bucket = objectStorageClient.bucket(bucketId);
      const file = bucket.file(req.params.fileName);
      
      const [exists] = await file.exists();
      if (!exists) {
        return res.sendStatus(404);
      }
      
      // Get file metadata
      const [metadata] = await file.getMetadata();
      
      // Set appropriate headers
      res.set({
        "Content-Type": metadata.contentType || "application/octet-stream",
        "Content-Length": metadata.size,
        "Cache-Control": "public, max-age=3600",
      });

      // Stream the file to the response
      const stream = file.createReadStream();
      stream.on("error", (err) => {
        console.error("Stream error:", err);
        if (!res.headersSent) {
          res.status(500).json({ error: "Error streaming file" });
        }
      });
      stream.pipe(res);
    } catch (error) {
      console.error("Error accessing bucket file:", error);
      return res.sendStatus(500);
    }
  });

  // Upload URL endpoint for video uploads
  app.post("/api/objects/upload", async (req, res) => {
    const objectStorageService = new ObjectStorageService();
    try {
      const uploadURL = await objectStorageService.getObjectEntityUploadURL();
      res.json({ uploadURL });
    } catch (error) {
      console.error("Error getting upload URL:", error);
      res.status(500).json({ error: "Failed to get upload URL" });
    }
  });


  // No need to create server for Vercel
}
