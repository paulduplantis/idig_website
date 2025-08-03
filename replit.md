# Overview

iDIG is a React-based web application focused on providing "resonant tools for curious minds." The platform features a content-rich website with an online book, contact functionality, and newsletter subscription system. Built as a modern full-stack application, it combines a React frontend with an Express.js backend and uses PostgreSQL for data persistence through Drizzle ORM.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **UI Library**: Comprehensive shadcn/ui component system built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS custom properties for theming support
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation through @hookform/resolvers

## Backend Architecture
- **Framework**: Express.js with TypeScript running on Node.js
- **API Design**: RESTful API endpoints for newsletter subscriptions and contact form submissions
- **Error Handling**: Centralized error handling middleware with structured error responses
- **Request Logging**: Custom middleware for API request logging and performance monitoring
- **Storage Abstraction**: Interface-based storage pattern supporting both in-memory and database implementations

## Data Storage
- **Database**: PostgreSQL configured through Neon Database serverless connection
- **ORM**: Drizzle ORM with schema-first approach and automatic TypeScript type generation
- **Schema Validation**: Drizzle-Zod integration for runtime validation matching database schema
- **Migrations**: Drizzle Kit for database schema migrations and management

## Development Environment
- **Build System**: Vite with React plugin and development-specific tooling
- **Development Server**: Express server with Vite middleware integration for hot module replacement
- **Static Assets**: Vite handles static asset serving and optimization
- **Path Aliases**: Configured path mapping for clean imports across client, server, and shared code

## Project Structure
- **Monorepo Layout**: Single repository with separate client, server, and shared directories
- **Shared Code**: Common schemas and types shared between frontend and backend
- **Component Organization**: UI components separated into reusable primitives and application-specific components
- **Type Safety**: Full TypeScript coverage with strict configuration across all packages

# External Dependencies

## Database Services
- **Neon Database**: Serverless PostgreSQL hosting with connection pooling
- **Drizzle ORM**: Type-safe database operations with automatic schema synchronization

## UI and Design
- **Radix UI**: Accessible component primitives for complex UI elements
- **Tailwind CSS**: Utility-first CSS framework with custom theme configuration
- **Lucide React**: Icon library providing consistent iconography

## Development Tools
- **TanStack Query**: Server state management with caching and synchronization
- **React Hook Form**: Form state management with validation integration
- **Zod**: Runtime type validation and schema definition
- **Wouter**: Minimal routing solution for single-page application navigation

## Build and Development
- **Vite**: Modern build tool with fast HMR and optimized production builds
- **TypeScript**: Static type checking across the entire application
- **ESBuild**: Fast JavaScript bundling for server-side code compilation