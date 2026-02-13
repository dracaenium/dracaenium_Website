# Dracaenium

A sophisticated, nature-inspired landing page built with modern web technologies.

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Single Source of Truth** - Centralized configuration and modular architecture

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/              # Next.js app router
│   ├── layout.tsx    # Root layout
│   ├── page.tsx      # Home page
│   └── globals.css   # Global styles
├── components/
│   ├── layout/       # Navigation, Footer
│   └── sections/     # Hero, About, Features, Contact
└── hooks/            # Custom React hooks
```

## Features

- Responsive design optimized for all devices
- Smooth scroll animations with Framer Motion
- Nature-inspired color palette (greens and stone tones)
- Modular component architecture for easy maintenance
- SEO-optimized with Next.js metadata
- Performance-optimized with automatic code splitting

## Customization

All design tokens are centralized in `tailwind.config.ts` for easy theming.
Content can be updated in individual section components under `src/components/sections/`.

## Build for Production

```bash
npm run build
npm start
```

## License

Private
