import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body with Zod schema
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      
      // Store the submission
      const submission = await storage.createContactSubmission(validatedData);
      
      // Log the submission for now (can be replaced with email service later)
      console.log("New contact form submission:", submission);
      
      // Return success response
      res.status(201).json({ 
        success: true, 
        message: "Your message has been received. I'll get back to you soon!",
        submissionId: submission.id 
      });
    } catch (error: any) {
      console.error("Contact form error:", error);
      
      // Handle validation errors
      if (error.name === "ZodError") {
        return res.status(400).json({ 
          success: false, 
          message: "Please check your form data",
          errors: error.errors 
        });
      }
      
      // Handle other errors
      res.status(500).json({ 
        success: false, 
        message: "Failed to submit your message. Please try again." 
      });
    }
  });

  // Get all contact submissions (for admin view - can be protected later)
  app.get("/api/contact/submissions", async (req, res) => {
    try {
      const submissions = await storage.getAllContactSubmissions();
      res.json(submissions);
    } catch (error) {
      console.error("Error fetching submissions:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch submissions" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
