import { type Newsletter, type InsertNewsletter, type BlogSubscription, type InsertBlogSubscription, type Contact, type InsertContact } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Newsletter methods
  createNewsletterSubscription(newsletter: InsertNewsletter): Promise<Newsletter>;
  getNewsletterByEmail(email: string): Promise<Newsletter | undefined>;
  
  // Blog subscription methods
  createBlogSubscription(blogSubscription: InsertBlogSubscription): Promise<BlogSubscription>;
  getBlogSubscriptionByEmail(email: string): Promise<BlogSubscription | undefined>;
  
  // Contact methods
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
}

export class MemStorage implements IStorage {
  private newsletters: Map<string, Newsletter>;
  private blogSubscriptions: Map<string, BlogSubscription>;
  private contacts: Map<string, Contact>;

  constructor() {
    this.newsletters = new Map();
    this.blogSubscriptions = new Map();
    this.contacts = new Map();
  }

  async createNewsletterSubscription(insertNewsletter: InsertNewsletter): Promise<Newsletter> {
    const id = randomUUID();
    const newsletter: Newsletter = { 
      ...insertNewsletter, 
      id,
      createdAt: new Date()
    };
    this.newsletters.set(id, newsletter);
    return newsletter;
  }

  async getNewsletterByEmail(email: string): Promise<Newsletter | undefined> {
    return Array.from(this.newsletters.values()).find(
      (newsletter) => newsletter.email === email,
    );
  }

  async createBlogSubscription(insertBlogSubscription: InsertBlogSubscription): Promise<BlogSubscription> {
    const id = randomUUID();
    const blogSubscription: BlogSubscription = { 
      ...insertBlogSubscription, 
      id,
      createdAt: new Date()
    };
    this.blogSubscriptions.set(id, blogSubscription);
    return blogSubscription;
  }

  async getBlogSubscriptionByEmail(email: string): Promise<BlogSubscription | undefined> {
    return Array.from(this.blogSubscriptions.values()).find(
      (subscription) => subscription.email === email,
    );
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = randomUUID();
    const contact: Contact = { 
      ...insertContact, 
      id,
      createdAt: new Date()
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values());
  }
}

export const storage = new MemStorage();
