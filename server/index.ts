import express from "express";

const app = express();

// Simple in-memory storage that persists during function execution
let subscribers = {
  newsletter: [] as string[],
  blog: [] as string[]
};

// Add CORS middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://www.i-dig.io');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Credentials', 'true');
  
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
    return;
  }
  
  next();
});

app.use(express.json());

// Simple test endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "iDIG API is running" });
});

// Newsletter subscription endpoint
app.post("/api/newsletter", (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }
    
    // Check if email already exists
    if (subscribers.newsletter.includes(email)) {
      return res.status(400).json({ message: "Email already subscribed" });
    }
    
    // Add email to newsletter subscribers
    subscribers.newsletter.push(email);
    
    res.json({ message: "Successfully subscribed to newsletter", email });
  } catch (error) {
    res.status(500).json({ message: "Failed to subscribe to newsletter" });
  }
});

// Blog subscription endpoint
app.post("/api/blog-subscription", (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }
    
    // Check if email already exists
    if (subscribers.blog.includes(email)) {
      return res.status(400).json({ message: "Email already subscribed to blog updates" });
    }
    
    // Add email to blog subscribers
    subscribers.blog.push(email);
    
    res.json({ message: "Successfully subscribed to blog updates", email });
  } catch (error) {
    res.status(500).json({ message: "Failed to subscribe to blog updates" });
  }
});

// Admin endpoints for subscriber lists
app.get("/api/admin/newsletter-subscribers", (req, res) => {
  try {
    const newsletterSubscribers = subscribers.newsletter.map((email, index) => ({
      id: `newsletter-${index}`,
      email,
      createdAt: new Date()
    }));
    res.json(newsletterSubscribers);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve newsletter subscribers" });
  }
});

app.get("/api/admin/blog-subscribers", (req, res) => {
  try {
    const blogSubscribers = subscribers.blog.map((email, index) => ({
      id: `blog-${index}`,
      email,
      createdAt: new Date()
    }));
    res.json(blogSubscribers);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve blog subscribers" });
  }
});

// Export the app for Vercel
export default app;
