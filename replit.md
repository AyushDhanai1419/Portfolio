# Overview

This is a full-stack portfolio website built with React and Express.js, showcasing a developer's professional experience, skills, awards, and certifications. The application features a modern, responsive design with smooth animations and interactive components. It serves as both a personal portfolio and a demonstration of modern web development practices using TypeScript, Tailwind CSS, and component-based architecture.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The frontend is built with React 18 using TypeScript and follows a component-based architecture. The application uses Vite as the build tool and development server, providing fast hot module replacement and optimized builds. The UI is constructed using shadcn/ui components built on top of Radix UI primitives, ensuring accessibility and consistent design patterns.

**Key architectural decisions:**
- **Component Organization**: Components are organized in a flat structure under `/client/src/components/` with UI primitives in `/components/ui/`
- **Styling Strategy**: Tailwind CSS with CSS custom properties for theming and design tokens
- **State Management**: Uses React hooks and context for local state management, with TanStack Query for server state
- **Animation**: Framer Motion for smooth transitions and micro-interactions
- **Type Safety**: Full TypeScript implementation with strict type checking

## Backend Architecture
The backend follows a minimal Express.js architecture with TypeScript. The server is designed as a simple API layer that can be extended with additional routes and middleware as needed.

**Key architectural decisions:**
- **Server Structure**: Express.js with modular route registration system
- **Development Setup**: tsx for TypeScript execution in development with hot reloading
- **Error Handling**: Centralized error handling middleware with proper HTTP status codes
- **Build Process**: esbuild for production bundling with external package optimization

## Data Storage Solutions
The application uses a hybrid storage approach with both PostgreSQL database integration and in-memory storage for development.

**Database Layer:**
- **ORM**: Drizzle ORM with PostgreSQL dialect for type-safe database operations
- **Schema Management**: Centralized schema definitions in `/shared/schema.ts` with Zod validation
- **Migration**: Drizzle Kit for database migrations and schema synchronization
- **Connection**: Neon Database serverless PostgreSQL for production

**Storage Interface:**
- **Abstraction**: IStorage interface provides a consistent API for data operations
- **Development**: MemStorage implementation for local development and testing
- **User Management**: Basic user CRUD operations with username/password support

## External Dependencies

### UI and Styling
- **Radix UI**: Comprehensive set of accessible UI primitives
- **Tailwind CSS**: Utility-first CSS framework with custom design system
- **Framer Motion**: Animation library for smooth transitions and gestures
- **Lucide React**: Modern icon library with consistent design

### Data Management
- **TanStack Query**: Server state management with caching and synchronization
- **React Hook Form**: Form state management with validation
- **Zod**: Runtime type validation and schema definition

### Database and Backend
- **Drizzle ORM**: Type-safe ORM with PostgreSQL support
- **Neon Database**: Serverless PostgreSQL database
- **Express.js**: Web framework for API endpoints
- **tsx**: TypeScript execution for development

### Development Tools
- **Vite**: Build tool and development server
- **esbuild**: Fast JavaScript bundler for production
- **TypeScript**: Static type checking and enhanced developer experience
- **PostCSS**: CSS processing with autoprefixer

The architecture prioritizes type safety, developer experience, and performance while maintaining simplicity and extensibility for future enhancements.