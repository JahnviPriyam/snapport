# Jahnvi Priyam - Software Engineer Portfolio

A premium, production-ready portfolio built for a Backend & Cloud Engineer. The design focuses on a clean, matte aesthetic inspired by Vercel/Stripe, emphasizing engineering depth over excessive animations.

## Project Overview
This repository contains a full-stack Next.js portfolio prioritizing performance, scalable folder structure, and a mature, product-engineering-focused visual design. It aims to position you as a backend/cloud specialist through clean UI patterns and strong technical copywriting.

## Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (Matte surfaces, no glassmorphism)
- **Animations:** Framer Motion (Subtle reveal and stagger)
- **Icons:** Custom SVG + Lucide React
- **Deployment:** Vercel

## Local Setup

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Folder Structure
```text
src/
 ├── app/               # Next.js app router pages & layout
 ├── components/
 │    ├── animations/   # Reusable Framer Motion wrappers
 │    ├── layout/       # Navbar and Footer
 │    ├── sections/     # Core page sections (Hero, Projects, etc.)
 │    └── ui/           # Reusable matte components (Cards, Badges)
 ├── data/              # Resume data payload
 ├── lib/               # Utility functions (Tailwind merge)
 └── types/             # Shared TypeScript definitions (if needed)
```

## Environment Variables
*(Currently, no environment variables are strictly required for the static portfolio. Add them here if you integrate form endpoints later).*
```env
# Example
# NEXT_PUBLIC_ANALYTICS_ID=your_id_here
```

## Architecture Visuals & Assets
To maintain the premium engineering aesthetic, add architecture diagrams and dashboard screenshots to your projects:
1. Place project screenshots in `public/images/projects/`
2. Ensure images are optimized (WebP format recommended)
3. Add your professional resume PDF to `public/resume/Jahnvi_Priyam_Resume.pdf`

## Deployment Steps

This portfolio is optimized for Vercel deployment.
1. Push your code to a GitHub repository.
2. Sign in to [Vercel](https://vercel.com).
3. Click "Add New Project" and select your repository.
4. Framework Preset will be automatically detected as Next.js.
5. Click "Deploy".

### Performance & SEO
The application is structured to target:
- **90+ Lighthouse Score**
- Fully responsive typographic scales
- Pre-configured OpenGraph and Twitter SEO metadata
- Smooth scroll behavior without layout jank

### Optional: Vercel Analytics
To track resume downloads and page views:
1. Go to your Vercel Project Dashboard.
2. Navigate to the "Analytics" tab and enable Web Analytics.
3. Install `@vercel/analytics` and inject it into `app/layout.tsx`.
