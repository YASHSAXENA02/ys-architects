import type { Express } from "express";
import { createServer, type Server } from "http";
import nodemailer from "nodemailer";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

// Configure your email credentials (use environment variables in production)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // your email
    pass: process.env.EMAIL_APP_PASSWORD, // your app password
  },
});

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactFormSchema.parse(req.body);
      const messageWithTimestamp = {
        ...validatedData,
        createdAt: new Date().toISOString(),
      };

      const savedMessage = await storage.createContactMessage(messageWithTimestamp);

      // Email content
      const mailOptions = {
        from: `"Contact Form" <${process.env.EMAIL_USER}>`,
        to: "recipient@example.com", // Replace with actual recipient
        subject: "New Contact Form Submission",
        text: `
New contact form submission:

Name: ${validatedData.name}
Email: ${validatedData.email}
Message: ${validatedData.message}
Submitted At: ${messageWithTimestamp.createdAt}
        `,
      };

      // Send email
      await transporter.sendMail(mailOptions);

      res.status(201).json({
        message: "Contact form submitted successfully and email sent",
        id: savedMessage.id,
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({
          message: "Validation error",
          errors: validationError.message,
        });
      } else {
        console.error("Error processing contact form:", error);
        res.status(500).json({
          message: "An error occurred while processing your request",
        });
      }
    }
  });

  app.get("/api/contact/messages", async (req, res) => {
    try {
      const messages = await storage.getAllContactMessages();
      res.json(messages);
    } catch (error) {
      console.error("Error fetching contact messages:", error);
      res.status(500).json({
        message: "An error occurred while fetching contact messages",
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
