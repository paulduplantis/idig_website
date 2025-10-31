import type { Express } from "express";
import { MemStorage } from "./storage";

// Use in-memory storage for serverless environment
const storage = new MemStorage();
import { insertNewsletterSchema, insertBlogSubscriptionSchema, insertContactSchema } from "@shared/schema";
import { z } from "zod";
// Removed object storage imports for serverless compatibility


export function registerRoutes(app: Express): void {
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

  // Basic health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", message: "iDIG API is running" });
  });


  // No need to create server for Vercel
}
