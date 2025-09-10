import { type Newsletter, type InsertNewsletter, type BlogSubscription, type InsertBlogSubscription, type Contact, type InsertContact } from "@shared/schema";
import { randomUUID } from "crypto";
import * as fs from "fs";
import * as path from "path";

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
  
  // Admin methods
  getAllNewsletterSubscribers(): Promise<Newsletter[]>;
  getAllBlogSubscribers(): Promise<BlogSubscription[]>;
}

export class FileStorage implements IStorage {
  private dataDir: string;
  private newslettersFile: string;
  private blogSubscriptionsFile: string;
  private contactsFile: string;

  constructor() {
    this.dataDir = path.join(process.cwd(), 'data');
    this.newslettersFile = path.join(this.dataDir, 'newsletters.json');
    this.blogSubscriptionsFile = path.join(this.dataDir, 'blog-subscriptions.json');
    this.contactsFile = path.join(this.dataDir, 'contacts.json');
    
    // Ensure data directory exists
    if (!fs.existsSync(this.dataDir)) {
      fs.mkdirSync(this.dataDir, { recursive: true });
    }
    
    // Initialize files if they don't exist
    this.initializeFiles();
  }

  private initializeFiles() {
    if (!fs.existsSync(this.newslettersFile)) {
      fs.writeFileSync(this.newslettersFile, JSON.stringify([], null, 2));
    }
    if (!fs.existsSync(this.blogSubscriptionsFile)) {
      fs.writeFileSync(this.blogSubscriptionsFile, JSON.stringify([], null, 2));
    }
    if (!fs.existsSync(this.contactsFile)) {
      fs.writeFileSync(this.contactsFile, JSON.stringify([], null, 2));
    }
  }

  private readNewsletters(): Newsletter[] {
    try {
      const data = fs.readFileSync(this.newslettersFile, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      return [];
    }
  }

  private writeNewsletters(newsletters: Newsletter[]) {
    fs.writeFileSync(this.newslettersFile, JSON.stringify(newsletters, null, 2));
  }

  private readBlogSubscriptions(): BlogSubscription[] {
    try {
      const data = fs.readFileSync(this.blogSubscriptionsFile, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      return [];
    }
  }

  private writeBlogSubscriptions(blogSubscriptions: BlogSubscription[]) {
    fs.writeFileSync(this.blogSubscriptionsFile, JSON.stringify(blogSubscriptions, null, 2));
  }

  private readContacts(): Contact[] {
    try {
      const data = fs.readFileSync(this.contactsFile, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      return [];
    }
  }

  private writeContacts(contacts: Contact[]) {
    fs.writeFileSync(this.contactsFile, JSON.stringify(contacts, null, 2));
  }

  async createNewsletterSubscription(insertNewsletter: InsertNewsletter): Promise<Newsletter> {
    const id = randomUUID();
    const newsletter: Newsletter = { 
      ...insertNewsletter, 
      id,
      createdAt: new Date()
    };
    
    const newsletters = this.readNewsletters();
    newsletters.push(newsletter);
    this.writeNewsletters(newsletters);
    
    return newsletter;
  }

  async getNewsletterByEmail(email: string): Promise<Newsletter | undefined> {
    const newsletters = this.readNewsletters();
    return newsletters.find(newsletter => newsletter.email === email);
  }

  async createBlogSubscription(insertBlogSubscription: InsertBlogSubscription): Promise<BlogSubscription> {
    const id = randomUUID();
    const blogSubscription: BlogSubscription = { 
      ...insertBlogSubscription, 
      id,
      createdAt: new Date()
    };
    
    const blogSubscriptions = this.readBlogSubscriptions();
    blogSubscriptions.push(blogSubscription);
    this.writeBlogSubscriptions(blogSubscriptions);
    
    return blogSubscription;
  }

  async getBlogSubscriptionByEmail(email: string): Promise<BlogSubscription | undefined> {
    const blogSubscriptions = this.readBlogSubscriptions();
    return blogSubscriptions.find(subscription => subscription.email === email);
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = randomUUID();
    const contact: Contact = { 
      ...insertContact, 
      id,
      createdAt: new Date()
    };
    
    const contacts = this.readContacts();
    contacts.push(contact);
    this.writeContacts(contacts);
    
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return this.readContacts();
  }

  async getAllNewsletterSubscribers(): Promise<Newsletter[]> {
    return this.readNewsletters();
  }

  async getAllBlogSubscribers(): Promise<BlogSubscription[]> {
    return this.readBlogSubscriptions();
  }
}
