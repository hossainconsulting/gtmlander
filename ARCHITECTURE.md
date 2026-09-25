# GTM Agents Landing Page — Architecture & Specification

## 7-Layer Foundation Specification

### Layer 1: UX Concept
**User Journey:** Hero → Problems → Solution → Pricing → FAQ → Final CTA
**Primary Messaging:** "Your AI Sales Team Never Sleeps"
**Personas:** Sales Ops Manager, VP of Sales, Revenue Operations Lead

### Layer 2: Interactive Demo
**3D Hero Scene** — Phase 2 implementation
**LOD Strategy:** LOD0 (desktop), LOD1 (tablet), LOD2 (mobile)
**Performance:** Hero load <1s, 60fps desktop, 30fps mobile

### Layer 3: Onboarding Flow
**Phase 2 Implementation:**
- Email + company signup
- CRM type selection (HubSpot, Pipedrive, Monday.com)
- 15-minute configuration wizard
- Trial activation with 14-day countdown

### Layer 4: 3D Technical Specification

**Tier 1: Lead Qualification**
- Input: Raw lead
- Process: AI analyzes company, industry, budget
- Output: Qualified/unqualified classification
- Time: <30 seconds

**Tier 2: Needs Analysis**
- Input: Qualified leads
- Process: AI asks targeted questions
- Output: Needs assessment with priority ranking
- Time: <60 seconds

**Tier 3: Proposal Building**
- Input: Analyzed leads
- Process: AI generates custom proposal
- Output: Personalized proposal with pricing, timeline
- Time: <2 minutes

**Tier 4: Conversion Tracking**
- Input: Proposals with response status
- Process: AI identifies decision signals
- Output: Lead scoring with recommendations
- Time: Real-time

### Layer 5: Performance Optimization
**Code Splitting:** vendor / three / animation chunks
**Lazy Loading:** Hero section with Suspense
**Caching:** 1-year for assets, no cache for HTML
**Bundle Budget:** <293KB gzipped

### Layer 6: Conversion Architecture
**Pricing Tiers:**
- Foundation $99/mo: Tier 1 + basic analytics
- Complete $299/mo: Tiers 1-3, custom workflows (RECOMMENDED)
- Premium $999/mo: All tiers, API access, dedicated AM

**Trust Signals:**
- "60% of leads fall through the cracks"
- "$750K+ annually lost"
- "30-day money-back guarantee"
- "Integrates with HubSpot, Pipedrive, Monday.com"

### Layer 7: Engineering Build Brief
**CI/CD:** GitHub Actions (ci.yml, performance.yml, deploy.yml)
**Deployment:** Vercel production
**Monitoring:** Lighthouse weekly, Core Web Vitals tracking

## Component Inventory

| Component | Status | Purpose |
|-----------|--------|---------|
| Header | ✅ | Navigation + CTA |
| Footer | ✅ | Links + social |
| Hero | ✅ | Headline + CTAs (3D Phase 2) |
| Problem | ✅ | 3-column grid |
| Solution | ✅ | 4-Tier workflow |
| Features | ✅ | Pricing tiers |
| FAQ | ✅ | Accordion Q&A |
| Pricing | ✅ | Final CTA |

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| UI | React | 18.2.0 |
| 3D | Three.js | r164 |
| React 3D | @react-three/fiber | 8.15+ |
| Bundler | Vite | 5.x |
| CSS | Tailwind CSS | 3.4+ |
| Language | TypeScript | 5.0 |
| Animation | Framer Motion | 10.x |
| Animation | GSAP | 3.12+ |
| Linting | ESLint | Latest |
| Formatting | Prettier | Latest |

## Success Metrics (Phase 1)

- ✅ Page Load (LCP) < 2 seconds
- ✅ Bundle Size < 293KB gzipped
- ✅ TypeScript strict mode
- ✅ 0 ESLint violations
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ GitHub Actions CI/CD
- ✅ Complete documentation

## Phased Rollout

| Phase | Timeline | Deliverables |
|-------|----------|--------------|
| 1 | Week 1 | Landing page structure, components, styling |
| 2 | Week 2 | 3D Hero scene, onboarding flow |
| 3 | Week 3 | Conversion optimization, testimonials |
| 4 | Week 4 | Performance review, SEO, monitoring |

---

**Document Version:** 1.0
**Last Updated:** September 25, 2026
