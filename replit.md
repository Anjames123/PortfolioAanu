# Personal Portfolio Website - Aibade James

## Overview

This is a modern, full-stack personal portfolio website for Aibade James, a Software Engineer and Web Designer. The application showcases projects, skills, and professional experience through a visually striking, interactive interface. Built with React, TypeScript, Express, and Drizzle ORM, it features a fully functional contact form submission system with in-memory storage and emphasizes modern UI/UX principles with dark/light mode support.

## Recent Changes (October 2025)

**SEO Enhancements**
- Added comprehensive meta tags for improved search engine visibility
- Implemented Open Graph tags for better social media sharing
- Added Twitter Card metadata for Twitter platform integration
- Included JSON-LD structured data for rich search results

**Interactive Project Modals**
- Created ProjectDetailModal component for detailed project case studies
- Integrated modal system with ProjectsSection for seamless project exploration
- Added support for challenge, solution, and outcome fields in project data
- Enhanced UX with smooth animations and accessible dialog patterns

**Functional Contact Form**
- Implemented backend API endpoint with Zod validation for contact submissions
- Integrated TanStack Query for optimized data fetching and mutation handling
- Added proper loading states and error handling with toast notifications
- Contact submissions stored in memory with expandable storage interface

**Performance Optimizations**
- Added lazy loading to below-the-fold images for faster initial page load
- Implemented will-change CSS property for smoother scroll animations
- Optimized ScrollReveal component with IntersectionObserver
- Maintained eager loading for hero image (above the fold content)

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server for fast hot module replacement
- **Wouter** for lightweight client-side routing (instead of React Router)
- Single-page application (SPA) architecture with component-based design

**UI Component Strategy**
- **shadcn/ui** component library (Radix UI primitives) for accessible, customizable components
- **Tailwind CSS** for utility-first styling with custom design system
- Custom theming system with CSS variables supporting light/dark modes
- Component organization: `/client/src/components` for shared components, `/client/src/pages` for route components

**Design System**
- Custom color palette with HSL values for theme flexibility
- Design guidelines documented in `design_guidelines.md` emphasizing portfolio-first presentation
- Gradient effects, particle backgrounds, and animation utilities for visual impact
- Responsive design with mobile-first approach and custom mobile navigation

**State Management & Data Fetching**
- **TanStack Query (React Query)** for server state management and caching
- Local component state with React hooks for UI interactions
- Custom query client configuration with specific error handling and refetch policies

**Key Interactive Features**
- Animated text rotation for hero section
- Scroll-triggered reveal animations for sections
- Custom cursor implementation for desktop
- Particle background effects
- Project detail modals with rich content
- Contact form with validation

### Backend Architecture

**Server Framework**
- **Express.js** with TypeScript for the REST API
- Custom middleware for request logging and error handling
- API routes organized in `/server/routes.ts`

**API Endpoints**
- `POST /api/contact` - Contact form submission with Zod validation
- `GET /api/contact/submissions` - Retrieve all submissions (admin endpoint)

**Request/Response Pattern**
- JSON-based API communication
- Centralized error handling with status codes
- Zod schema validation for request body validation
- Response includes success status, messages, and relevant data

**Development vs Production**
- Vite middleware integration in development for HMR
- Static file serving in production from `/dist/public`
- Environment-aware server setup

### Data Layer

**ORM & Schema Design**
- **Drizzle ORM** with PostgreSQL dialect for type-safe database operations
- Schema definitions in `/shared/schema.ts` for shared types between client and server
- Drizzle-Zod integration for automatic validation schema generation

**Database Tables**
- `users` - User authentication data (id, username, password)
- `contact_submissions` - Form submissions (id, name, email, project_type, message, submitted_at)

**Storage Abstraction**
- `IStorage` interface in `/server/storage.ts` defines CRUD operations
- `MemStorage` class provides in-memory storage implementation for development
- Design allows easy swapping to PostgreSQL implementation via Drizzle ORM

**Data Validation**
- Zod schemas generated from Drizzle tables ensure consistency
- Email validation, minimum length requirements on form fields
- TypeScript types inferred from schemas for end-to-end type safety

### External Dependencies

**UI Component Libraries**
- **Radix UI** - Headless UI primitives (@radix-ui/react-* packages) for accessible components
- **shadcn/ui** - Pre-built component patterns built on Radix UI
- **Lucide React** - Icon library for consistent iconography

**Database & ORM**
- **@neondatabase/serverless** - Neon Postgres serverless driver
- **Drizzle ORM** - TypeScript ORM with migrations support
- **Drizzle Kit** - Schema management and migration tooling

**Styling & Animation**
- **Tailwind CSS** - Utility-first CSS framework
- **class-variance-authority** - Type-safe variant management for components
- **embla-carousel-react** - Carousel/slider functionality

**Form Management**
- **React Hook Form** - Form state management
- **@hookform/resolvers** - Validation resolver for Zod integration
- **Zod** - Schema validation library

**Development Tools**
- **Replit-specific plugins** - Runtime error overlay, cartographer, dev banner
- **TSX** - TypeScript execution for development server
- **esbuild** - Fast JavaScript bundler for production builds

**API & State**
- **TanStack Query** - Server state management and caching
- **date-fns** - Date formatting and manipulation

**Third-Party Service Integrations**
- Font loading from Google Fonts (Inter, Outfit, JetBrains Mono, DM Sans, Fira Code, Geist Mono)
- Dicebear API for avatar generation in testimonials
- Asset management through `/attached_assets` directory for project images

**Production Deployment**
- PostgreSQL database (configured via DATABASE_URL environment variable)
- Static asset serving from built Vite output
- Session management with connect-pg-simple (PostgreSQL session store)