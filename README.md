# Helix Website

Helix is a Next.js 14 + TypeScript experience showcasing MetaDSP, DMP, and SSP programs. The site highlights case studies, insights, and services that prove Helix’s ability to unify programmatic infrastructure while maintaining a strict B2B tone.

## Stack
- **Framework:** Next.js 14 (App Router) with TypeScript
- **Styling:** Tailwind CSS, custom design tokens, and shadcn/ui primitives
- **Animation:** Framer Motion for hero and stat interactions
- **Content:** MDX files parsed with `next-mdx-remote`
- **Validation:** `zod` schemas for MDX frontmatter and contact form

## Getting Started
```bash
pnpm install
pnpm dev
```

Other commands:
- `pnpm build` – build the production bundle
- `pnpm start` – run the compiled build
- `pnpm lint` – run Next.js linting

> Replace `pnpm` with `npm` or `yarn` if preferred.

## Project Structure
```
app/              # App Router pages and API routes
components/       # Layout, UI primitives, and site sections
content/          # MDX case studies and insights
lib/              # MDX loading, SEO helpers, analytics, email stubs
public/           # Static assets and OG image
scripts/          # Utility scripts (e.g., OG generation placeholder)
styles/           # Global + Tailwind styles
```

## Content Model
Frontmatter is validated via `zod` in `lib/schema.ts`.
- Case studies: `title`, `summary`, `slug`, `kpis[]`, `industries[]`, `services[]`, `date`, `read_time_minutes`
- Insights: `title`, `slug`, `excerpt`, `tags[]`, `date`, `read_time_minutes`

Body content is authored in MDX. Components are mapped in `components/mdx-components.tsx`.

To add a case study or insight:
1. Create a new `.mdx` file under `content/case-studies` or `content/insights`.
2. Include the required frontmatter fields.
3. Structure the body using the established headings.

## Theming
Design tokens are defined in `styles/globals.css`:
```
--hx-bg: #0B0F14;
--hx-surface: #0E141B;
--hx-text: #E6EDF5;
--hx-muted: #9AA6B2;
--hx-accent: #00E5FF;
--hx-accent-2: #3B82F6;
--hx-border: #1F2A37;
```
Headings use Space Grotesk; body copy uses Inter (see `app/layout.tsx`).

## Contact Form & Email
The contact API (`app/api/contact/route.ts`) validates payloads with `zod` and calls `sendEmail` in `lib/email.ts`. The email helper currently logs submissions and includes commented Resend wiring. Update `.env` with your provider credentials before production.

## Analytics & Cookies
`lib/analytics.ts` injects GA4 or Plausible based on environment variables. A lightweight cookie banner stores consent in `localStorage` and never blocks content.

## Deployment
The project is optimized for Vercel. Ensure environment variables from `.env.example` are set. Run `pnpm build` prior to deploying.

