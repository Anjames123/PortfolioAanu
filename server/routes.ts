import type { Express } from "express";
import { createServer, type Server } from "http";
import { ReplitConnectors } from "@replit/connectors-sdk";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";

const contactRecipient = process.env.CONTACT_EMAIL_TO || "ajibadejames19@gmail.com";
const contactSender = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
const replitConnectors = new ReplitConnectors();

async function sendContactEmail({
  name,
  email,
  projectType,
  message,
}: {
  name: string;
  email: string;
  projectType: string;
  message: string;
}) {
  const emailPayload = {
    from: contactSender,
    to: [contactRecipient],
    reply_to: email,
    subject: `New portfolio inquiry from ${name}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Project type: ${projectType}`,
      "",
      message,
    ].join("\n"),
  };

  const response = process.env.RESEND_API_KEY
    ? await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailPayload),
      })
    : await replitConnectors.proxy("resend", "/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailPayload),
      });

  if (!response.ok) {
    const details = await response.text();
    throw new Error(`Resend request failed (${response.status}): ${details}`);
  }

  return response.json();
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body with Zod schema
      const validatedData = insertContactSubmissionSchema.parse(req.body);

      await sendContactEmail(validatedData);

      // Store the submission
      const submission = await storage.createContactSubmission(validatedData);

      console.log(`Contact form email sent for submission ${submission.id}`);

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
