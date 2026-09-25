# GTM Agents Landing Page

AI-powered lead qualification and sales orchestration platform. Production-ready React 18.2 + Three.js landing page with 4-tier workflow automation.

**Status:** Phase 1 Foundation (Sept 2026)
**Tech Stack:** React 18.2, Three.js r164, Vite 5, TypeScript 5, Tailwind CSS 3.4
**Performance Target:** <2s load, 60fps desktop, <293KB gzipped

## Quick Start

```bash
npm install              # Install dependencies
npm run dev             # Start dev server (http://localhost:5173)
npm run build           # Production build
npm run preview         # Preview production build
npm run type-check      # TypeScript validation
npm run lint            # ESLint validation
npm run format          # Format code with Prettier
npm test                # Run unit tests
```

## Architecture

### 7-Layer Specification
1. UX Concept — Messaging strategy
2. Interactive Demo — 3D scene showcase
3. Onboarding Flow — 15-min trial setup
4. 3D Technical Spec — Tier-by-tier details
5. Performance Optimization — <2s load time
6. Conversion Architecture — Multi-tier pricing
7. Engineering Build Brief — Full stack deployment

### Components

**Layout:** Header, Footer
**Sections:** Hero, Problem, Solution, Features, FAQ, Pricing

### Tech Stack
- React 18.2 with Suspense
- Three.js r164 with @react-three/fiber
- Vite 5 with code splitting
- TypeScript 5 strict mode
- Tailwind CSS 3.4
- ESLint + Prettier

## Performance Targets

| Metric | Target | Status |
|--------|--------|--------|
| Load Time (LCP) | < 2 seconds | ✅ Configured |
| Bundle Size | < 293KB gzipped | ✅ Configured |
| Desktop FPS | 60fps | ✅ Configured |
| Mobile FPS | 30fps | ✅ Phase 2 (LOD) |
| Lighthouse | 90+ | ✅ Configured |

## GitHub Actions CI/CD

- **ci.yml** — TypeScript, ESLint, tests, build, bundle size
- **performance.yml** — Weekly Lighthouse monitoring
- **deploy.yml** — Vercel production deployment

## Next Steps

1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`
3. Push to GitHub (see PUSH_TO_GITHUB.md)
4. Phase 2: 3D Hero scene implementation

## Documentation

- [`ARCHITECTURE.md`](./ARCHITECTURE.md) — Technical specs
- [`PUSH_TO_GITHUB.md`](./PUSH_TO_GITHUB.md) — GitHub setup

---

**Phase 1 Foundation: COMPLETE** ✅
Ready for development.
