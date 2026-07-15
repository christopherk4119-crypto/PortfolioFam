# CDigitalStudios

Portfolio site for CDigitalStudios — Calgary & Alberta digital growth partner (custom websites, local SEO, business automation).

## Stack

- [Next.js 16](https://nextjs.org) (App Router, TypeScript)
- [Tailwind CSS v4](https://tailwindcss.com)
- Hand-rolled shadcn/ui-style primitives (`src/components/ui`) — `class-variance-authority`, `tailwind-merge`, `@radix-ui/react-slot`, `lucide-react`

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Structure

- `src/app` — routes, layout, global styles/design tokens
- `src/components/site` — page sections (header, hero, services, work, footer)
- `src/components/ui` — reusable primitives (button, badge, pulse dot)
- `src/lib/site-config.ts` — real content: services, work items, nav links, contact info

To add real client testimonials later, flip `SHOW_TESTIMONIALS` to `true` in `src/lib/site-config.ts` and fill in `TestimonialCard` props in `src/components/site/hero-section.tsx`.
