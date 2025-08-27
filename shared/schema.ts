import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const newsletters = pgTable("newsletters", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  email: text("email").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const blogSubscriptions = pgTable("blog_subscriptions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  email: text("email").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const contacts = pgTable("contacts", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const presentations = pgTable("presentations", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description"),
  isPublic: boolean("is_public").default(true).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const presentationSlides = pgTable("presentation_slides", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  presentationId: varchar("presentation_id").references(() => presentations.id, { onDelete: "cascade" }).notNull(),
  type: text("type").notNull(), // 'intro', 'video', 'callout'
  title: text("title"),
  content: text("content"),
  videoUrl: text("video_url"),
  duration: integer("duration"), // duration in seconds for callouts
  order: integer("order").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertNewsletterSchema = createInsertSchema(newsletters).pick({
  email: true,
});

export const insertBlogSubscriptionSchema = createInsertSchema(blogSubscriptions).pick({
  email: true,
});

export const insertContactSchema = createInsertSchema(contacts).pick({
  name: true,
  email: true,
  subject: true,
  message: true,
});

export const insertPresentationSchema = createInsertSchema(presentations).pick({
  title: true,
  slug: true,
  description: true,
  isPublic: true,
});

export const insertPresentationSlideSchema = createInsertSchema(presentationSlides).pick({
  presentationId: true,
  type: true,
  title: true,
  content: true,
  videoUrl: true,
  duration: true,
  order: true,
});

export type InsertNewsletter = z.infer<typeof insertNewsletterSchema>;
export type Newsletter = typeof newsletters.$inferSelect;
export type InsertBlogSubscription = z.infer<typeof insertBlogSubscriptionSchema>;
export type BlogSubscription = typeof blogSubscriptions.$inferSelect;
export type InsertContact = z.infer<typeof insertContactSchema>;
export type Contact = typeof contacts.$inferSelect;
export type InsertPresentation = z.infer<typeof insertPresentationSchema>;
export type Presentation = typeof presentations.$inferSelect;
export type InsertPresentationSlide = z.infer<typeof insertPresentationSlideSchema>;
export type PresentationSlide = typeof presentationSlides.$inferSelect;
