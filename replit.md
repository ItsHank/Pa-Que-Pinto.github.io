# Pa' que Pinto #2 - Vehicle Dealership Platform

## Overview

A premium automotive e-commerce platform for browsing and exploring a curated catalog of 86+ vehicles. The application provides an immersive, Tesla/Carvana-inspired browsing experience with VIP discount tiers, advanced filtering, and Spanish-language interface. Built as a full-stack TypeScript application with React frontend and Express backend.

**Status**: Fully configured and running in Replit environment with dynamic vehicle images and performance optimizations (October 22, 2025)

## Recent Changes

**October 22, 2025 - Performance Optimizations & UI Improvements**
- ✅ Implemented debounce hook (300ms) for search input to prevent lag during typing
- ✅ Added visual "Buscando..." indicator when search is processing
- ✅ Implemented lazy loading for vehicle images with `loading="lazy"` and `decoding="async"`
- ✅ Fixed VIPSelector to display discount badge for "Primera Compra" (10-15%) level
- ✅ Added click handler to "Contactar" button with placeholder link (`TU_LINK_AQUI`)
- ✅ Limited initial catalog display to 8 vehicles for optimal performance
- ✅ Added "¿No encuentras lo que buscas?" CTA card with search and "Ver Todos" buttons
- ✅ Implemented dynamic VIP gradient backgrounds that change smoothly with tier selection
- ✅ Added special message for Primera Compra: "Muestra una captura de pantalla en tu ticket"
- 📍 User can replace `TU_LINK_AQUI` in `client/src/components/HeroSection.tsx` with their contact link

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18+ with TypeScript for type-safe component development
- Vite as the build tool and development server for fast HMR and optimized production builds
- Wouter for lightweight client-side routing
- Single-page application (SPA) architecture

**UI Component Strategy**
- shadcn/ui component library (New York style variant) built on Radix UI primitives
- Tailwind CSS for utility-first styling with custom design system
- CSS variables for theming with dark mode as default
- Custom color palette inspired by premium automotive brands (Tesla, Mercedes-Benz)

**Design System**
- Typography: Inter (primary) and Rajdhani (technical specs) from Google Fonts
- Dark mode primary with electric blue accent color (210 100% 55%)
- Price range color coding: Gold (Alto), Blue (Medio), Green (Bajo)
- Responsive design with mobile-first approach

**State Management**
- React hooks (useState, useMemo, useRef) for local component state
- TanStack Query (React Query) for server state management and caching
- No global state management library - deliberately kept simple with component-level state

**Key Features**
- VIP discount system with four tiers (Primera Compra, Platino, Oro, Diamante) applying dynamic discounts based on price range
- Dynamic VIP gradient backgrounds that transition smoothly when changing tiers (yellow/silver/gold/cyan)
- Multi-criteria filtering (search, category, price range) with debounced search for optimal performance
- Smart catalog pagination: shows 8 vehicles initially, expands with filters or "Ver Todos" button
- Search discovery CTA: "¿No encuentras lo que buscas?" card with quick access to advanced filters
- Search indicator showing "Buscando..." when filtering is in progress
- Special Primera Compra guidance: "Muestra una captura de pantalla en tu ticket"
- Smooth scroll navigation and category-based browsing
- Vehicle cards with specifications (speed, fuel capacity, trunk space)
- Dynamic vehicle image loading system with lazy loading for better performance
- Initial loading screen with "Cargando vehículos..." animation
- All VIP tiers display their discount range in visible badges

### Backend Architecture

**Server Framework**
- Express.js for HTTP server and API routing
- Node.js runtime with ES modules (type: "module")
- Development and production modes with environment-based configuration

**Data Storage**
- In-memory storage implementation (MemStorage class) as current data layer
- Designed with IStorage interface for future database integration
- Static vehicle data imported from shared schema

**API Design**
- RESTful API structure with `/api` prefix for all application routes
- Request/response logging middleware for debugging
- JSON-based communication
- Error handling middleware for consistent error responses

**Development Tools**
- TSX for running TypeScript directly in development
- esbuild for production server bundling
- Hot module replacement via Vite middleware in development

### Data Schema & Models

**Core Entities**
- Users: Basic authentication schema with username/password (prepared for future auth implementation)
- Vehicles: Comprehensive model with category, price range, specifications (speed, tank capacity, trunk capacity)

**Type System**
- Shared TypeScript types between client and server via `@shared` alias
- Zod schemas with drizzle-zod integration for runtime validation
- Type inference for Insert and Select operations

**Vehicle Categories**
- AUTOS (54 vehicles) - Sports cars and luxury sedans
- CAMIONETAS (17 vehicles) - SUVs and pickup trucks
- MOTOS (9 vehicles) - High-end motorcycles
- OTROS (6 vehicles) - Specialized vehicles

**Price Ranges**
- Alto (High tier) - Premium vehicles with 12-20% VIP discounts
- Medio (Mid tier) - Mid-range vehicles with 13-17.5% VIP discounts
- Bajo (Low tier) - Entry-level vehicles with 10-15% VIP discounts

### External Dependencies

**Database**
- Drizzle ORM configured for PostgreSQL via @neondatabase/serverless
- Connection pooling through Neon serverless driver
- Schema migrations managed by drizzle-kit
- Database currently not active - using in-memory storage as placeholder

**UI Component Library**
- Radix UI primitives (20+ components) for accessible, unstyled components
- Full suite: dialogs, dropdowns, popovers, tooltips, accordions, tabs, etc.
- Custom styling applied via Tailwind and CVA (class-variance-authority)

**Form Management**
- React Hook Form with @hookform/resolvers for validation
- Zod schema integration for type-safe form validation

**Utility Libraries**
- clsx + tailwind-merge (via cn utility) for conditional className handling
- date-fns for date manipulation
- nanoid for generating unique IDs
- cmdk for command palette functionality

**Development Dependencies**
- Replit-specific plugins for runtime error overlay, cartographer, and dev banner
- TypeScript with strict mode enabled
- PostCSS with Tailwind and Autoprefixer

**Assets Management**
- Stock images stored in `attached_assets/stock_images/` directory
- Vehicle images stored in `attached_assets/` directory
- Dynamic image loading system via `import.meta.glob` in `client/src/lib/vehicleImages.ts`
- Images automatically matched to vehicles by normalized model name (uppercase, no special chars)
- Vite alias `@assets` for asset imports
- Images for categories and hero section (luxury cars, trucks, motorcycles)

**Session Management**
- connect-pg-simple configured for PostgreSQL session storage (prepared for future use)
- Express session middleware ready for authentication implementation

## Replit Environment Setup

**Import Date**: October 22, 2025

### Configuration Changes Made
1. **Dependencies Installation**: Installed all npm packages (493 packages) for the full-stack TypeScript application
2. **TypeScript Configuration**: Updated tsconfig.json with ES2022/ES2023 lib to support modern features including import.meta.dirname
3. **Vite Configuration**: Already properly configured to work with Replit's proxy environment:
   - Host: 0.0.0.0 (binds to all interfaces)
   - Port: 5000 (Replit's required port)
   - HMR clientPort: 443 (for secure proxy compatibility)
   - allowedHosts: true in server/vite.ts for proxy compatibility
4. **Workflow Setup**: Configured single workflow "Server" running `npm run dev:server` on port 5000 with webview output
5. **Deployment Configuration**: Set up autoscale deployment with:
   - Build: `npm run build` (builds both Vite frontend and esbuild backend)
   - Run: `node dist/index.js`
6. **Git Ignore**: Added .gitignore for Node.js, TypeScript, and build artifacts

### Development Commands
- `npm run dev:server` - Start development server with hot reload
- `npm run build` - Build both client (Vite) and server (esbuild) for production
- `npm start` - Run production server
- `npm run check` - TypeScript type checking
- `npm run db:push` - Push database schema changes (requires DATABASE_URL)

### Server Architecture
- **Port 5000**: Serves both frontend (via Vite in dev) and backend API
- **Host**: 0.0.0.0 for frontend access, Express backend on same port
- **Development**: Uses Vite middleware for HMR and instant updates
- **Production**: Serves static files from dist/public directory

### Notes
- Database is currently using in-memory storage (MemStorage class)
- PostgreSQL configuration ready but DATABASE_URL not set
- All 86+ vehicles loaded from static data in shared schema

## Customization Guide

### How to Change Dealership Name
Edit `shared/config.ts` to change the dealership name and tagline. This updates the name in the navbar, hero section, and footer. 

**Note:** To update the browser tab title and meta description, you must also manually edit `client/index.html`.

### How to Modify Vehicles
Edit `shared/schema.ts` to add, edit, or remove vehicles from the catalog:
- Add new vehicles by copying an existing vehicle object and modifying values
- Edit existing vehicles by changing their properties (price, speed, capacity, etc.)
- Delete vehicles by removing the entire line
- Vehicle images should be placed in `attached_assets/` with the filename matching the model name

**Current Vehicle Count:** 86 vehicles total
- AUTOS: 54 (including new ALFA ROMEO)
- CAMIONETAS: 17
- MOTOS: 9
- OTROS: 6

For detailed instructions, see `COMO_MODIFICAR.md` in the root directory.