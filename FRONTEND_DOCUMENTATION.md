# Mattera Life Systems - Frontend Documentation

## 1. Project Overview
**Mattera Life Systems** is a deep-tech platform dedicated to building AI-powered health intelligence infrastructure for animals. The platform integrates wearable sensors, behavioral analytics, and predictive diagnostics to enable continuous health monitoring across various animal segments including companion animals, livestock, veterinary clinics, and performance animals.

The frontend serves as the primary interface for researchers, investors, and partners to interact with the Mattera ecosystem and its flagship platform, **PawOS**.

---

## 2. Core Technology Stack
The frontend is built using a modern, high-performance stack centered around four main pillars:
- **Next.js**: Version 16 (App Router) for hybrid static/dynamic rendering.
- **React**: Version 19 for declarative UI and component-based architecture.
- **TypeScript**: Ensuring type safety and robust developer experience.
- **Tailwind CSS**: Version 4 for utility-first styling and rapid design iteration.

### Supporting Libraries:
- **Framer Motion**: For high-performance micro-animations and smooth transitions.
- **Lucide React**: For a consistent and modern iconography system.
- **Axios**: For managing API communications with the backend.
- **Strapi SDK/Fetch**: Custom utilities for seamless integration with the headless CMS.

---

## 3. System Architecture
The application follows a **Data-Driven Hybrid Architecture** designed for high performance, SEO, and content flexibility.

### 3.1. React Server Components (RSC)
We utilize Next.js **Server Components** by default. This ensures that:
- **Data Fetching** happens on the server, close to the CMS, reducing client-side JavaScript.
- **Improved Performance**: Only the necessary HTML and minimal interactivity are sent to the browser.
- **Secure Integration**: API tokens and backend logic remain on the server.

### 3.2. Hybrid Rendering Strategy
- **Static Site Generation (SSG)**: Key pages (Home, Technology, Research) are pre-rendered at build time for instant loading.
- **Dynamic Catch-all Routes**: The `[slug]` system allows the application to dynamically generate new pages created in Strapi without requiring new code deployments.

### 3.3. Key Directories & Responsibilities
- **`src/app/`**: The "App Router" handles routing, layouts, and page-specific logic using Server Components.
- **`src/components/`**: Client-side components (using `'use client'`) are reserved for interactive elements like the `Navbar`, `ThemeToggle`, and animations.
- **`src/lib/`**: Centralized service layer for fetching content from Strapi and handling business logic.

### 3.4. Data Flow
1. **Request**: User navigates to a route.
2. **Fetch**: The Next.js Page (Server Component) requests data from the **Strapi CMS**.
3. **Render**: The server renders the page with the fetched data.
4. **Hydrate**: The client adds interactivity (Framer Motion, event listeners) to the static HTML.

---

## 4. Feature Breakdown
### 4.1. Dynamic Content via CMS
The website is highly dynamic. Most content, including text, badges, and metrics, is managed through **Strapi CMS**. This allows non-technical users to update the site without code changes.
- **Hero Section**: Badge text, main title, and description.
- **Intelligence Stack**: Multi-disciplinary pillars (AI, Behavioral Analytics, IoT, etc.).
- **Research Studies**: Case studies on various animal sectors.
- **Use Cases**: Specific applications for clinics, livestock, and owners.

### 4.2. Theme Management (Dark/Light Mode)
A custom theme system allows users to toggle between Light and Dark modes. The system uses a centralized `globals.css` with CSS variables to ensure consistency across all components.

### 4.3. Responsive & Premium Design
- **Mobile First**: Fully responsive layout that adapts to all screen sizes.
- **Modern Aesthetics**: Leverages glassmorphism, radial gradients, and micro-animations to provide a premium "deep-tech" feel.
- **Interactive Elements**: Hover effects, floating panels, and pulse glows to guide user attention.

---

## 5. Page Catalog
1.  **Home (`/`)**: High-level overview, PawOS preview, and technology pillars.
2.  **Platform (`/platform`)**: Detailed look at the PawOS architecture and capabilities.
3.  **Technology (`/technology`)**: Deep dive into the AI and sensor stack.
4.  **Research (`/research`)**: Archive of cross-species intelligence studies.
5.  **Company (`/company`)**: Mission, vision, and team information.
6.  **Investors (`/investors`)**: Funding and partnership opportunities.
7.  **Contact (`/contact`)**: Lead generation and partnership form.
8.  **Dynamic Pages (`/[slug]`)**: Catch-all for generic pages created in the CMS.

---

## 6. Integration & API
The frontend communicates with the Strapi backend via a set of optimized fetch functions. 
- **Endpoint**: Configured via environment variables (`NEXT_PUBLIC_STRAPI_URL`).
- **Security**: Environment-based API tokens for secure data retrieval.

---

## 7. Setup & Development
To run the project locally:
1.  Navigate to the `my-app` directory.
2.  Install dependencies: `npm install`
3.  Set up environment variables in `.env.local`.
4.  Launch the development server: `npm run dev`
5.  Access the site at `http://localhost:3001`.

---

## 8. SEO & Performance
- **Metadata API**: Dynamic titles and descriptions for every page.
- **Static Site Generation (SSG)**: Optimized build process for fast load times.
- **Image Optimization**: Automatic resizing and lazy loading via `next/image`.
- **Google Analytics**: Integrated for tracking user engagement and metrics.
