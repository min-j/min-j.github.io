# jonathanmin.com

Personal portfolio site. Live at [jonathanmin.com](https://www.jonathanmin.com).

## Tech Stack

- **Next.js 16** — static export via `output: 'export'`, deployed to GitHub Pages
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **Framer Motion** — Hero and About section animations
- **lucide-react** — UI icons
- **react-icons** — Brand icons (GitHub, LinkedIn)

## Features

- Scroll-driven section highlighting in the nav
- CSS-based scroll reveal animations (no hydration flash)
- Shimmer name animation and blinking cursor in the hero
- Scroll progress bar
- Frosted glass navbar on scroll
- All content managed from a single `src/lib/data.ts` file

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
npx serve out
```
