import express from "express";

const app = express();

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

// Simple newsletter endpoint for testing
app.post("/api/newsletter", (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }
    res.json({ message: "Successfully subscribed to newsletter", email });
  } catch (error) {
    res.status(500).json({ message: "Failed to subscribe to newsletter" });
  }
});

// Simple blog subscription endpoint for testing
app.post("/api/blog-subscription", (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }
    res.json({ message: "Successfully subscribed to blog updates", email });
  } catch (error) {
    res.status(500).json({ message: "Failed to subscribe to blog updates" });
  }
});

// Export the app for Vercel
export default app;
