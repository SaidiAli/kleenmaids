# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

Kleenmaids is a professional cleaning and staffing services website built with Next.js 15, React 19, and TypeScript. The application focuses on providing cleaning services including live-in helper placement, scheduled house cleaning, emergency cleaning solutions, and professional staffing services in Uganda.

## Key Technologies

- **Framework**: Next.js 15.3.4 (App Router)
- **React**: 19.0.0 (latest)
- **TypeScript**: 5.x
- **Styling**: Tailwind CSS 4.x with custom color scheme
- **Animation**: Motion (Framer Motion) for smooth animations
- **UI Components**: Custom components with Radix UI primitives
- **Development**: Turbopack for fast development

## Development Commands

### Primary Development
```bash
# Start development server with Turbopack on port 5001
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Architecture Overview

### Directory Structure
- `src/app/` - Next.js App Router pages and layouts
- `src/components/` - Reusable React components
- `src/components/ui/` - Base UI components (buttons, cards, form elements)
- `src/components/homepage/` - Homepage-specific components
- `src/data.ts` - Static data exports (services, testimonials)
- `src/lib/utils.ts` - Utility functions and helpers

### Key Components Architecture

**Layout System**: The application uses a consistent layout with:
- Root layout (`app/layout.tsx`) with global navigation and footer
- Custom color scheme: bluish (#F7FCFF), greenish (#85D332), yellowish (#FFD00E), deep-blue (#131850)
- Typography using Geist Sans, Geist Mono, and Unna fonts

**Navigation**: Complex navbar (`components/navbar.tsx`) with:
- Desktop dropdown menu for services
- Mobile hamburger menu with animations
- Service routing to individual service pages (currently TODO)

**Animation System**: Heavy use of Motion (Framer Motion) for:
- Page transitions and scroll-triggered animations
- Component entrance animations with stagger effects
- Hover states and interactive elements

### Styling Approach

**Tailwind Configuration**:
- Custom color variables defined in `globals.css`
- Uses Tailwind CSS 4.x with custom theme extensions
- CSS variables for consistent color usage across components

**Component Patterns**:
- Extensive use of `cn()` utility for conditional classes
- Consistent spacing and responsive design patterns
- Motion variants for consistent animation behavior

## Current Development Status

### Completed Features
- Homepage with hero section, services overview, testimonials
- About and Contact page structure
- Responsive navigation with mobile menu
- Animation system implementation
- Basic routing structure

### Outstanding TODOs (from TODOs file)
- Contact page functionality
- Individual service pages
- Font optimization
- Footer completion  
- Entry/exit animations
- Mobile responsiveness improvements

## Data Management

Static data is centralized in `src/data.ts`:
- `services` array for service listings
- `testimonials` array for customer feedback
- This approach works well for current content but may need migration to CMS for dynamic content

## Styling Guidelines

### Color Usage
- Primary background: `bg-bluish` (#F7FCFF)
- Primary action: `bg-greenish` (#85D332) 
- Accent: `bg-yellowish` (#FFD00E)
- Dark sections: `bg-deep-blue` (#131850)

### Animation Patterns
Consistent motion variants used throughout:
```typescript
variants={{
  hidden: { opacity: 0, y: 100, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1.2, ease: "easeOut" } }
}}
```

## Development Notes

### Port Configuration
Development server runs on port 5001 (configured in package.json) to avoid conflicts.

### Image Handling
Next.js Image component configured for Cloudinary integration (`next.config.ts`).

### TypeScript Configuration
- Strict mode enabled
- Path aliases: `@/*` maps to `./src/*`
- ES2017 target for broader compatibility

### Linting
ESLint configured with Next.js rules, `@typescript-eslint/no-explicit-any` disabled for flexibility.
