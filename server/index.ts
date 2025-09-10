import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";

const app = express();

// Add CORS middleware FIRST - Updated for deployment 22 
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://www.i-dig.io');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Credentials', 'true');
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
    return;
  }
  
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Error handling middleware
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(status).json({ message });
});

// Register API routes
registerRoutes(app);

// Export the app for Vercel
export default app;
