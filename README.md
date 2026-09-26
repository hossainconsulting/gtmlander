# GTM Agents landing-page prototype

React 18 + TypeScript + Three.js, built with Vite 7. This is a product concept under development, not a live lead-processing service.

## Current increment

- Lazy-loaded procedural Hero with orbit/pulse animation and scroll camera movement.
- Keyboard-accessible workflow stages outside the canvas, with reduced-motion, WebGL-failure and low-frame-rate fallback.
- Responsive core sections and a four-stage solution diagram.
- Real CI checks and reproducible dependency lockfile; measured gzip budget and desktop/mobile Chromium tests.

See [the reconciled plan](docs/EXECUTION-PLAN.md) and [dated evidence](evidence/2026-09-25/phase2-and-verified-plan/README.md) for actual checks, source-plan conflicts, and remaining gates.

## GTM operating concept

The [five-function operating model](docs/gtm-operating-model.md) maps the GTM team infographic to a proposed CEO-led process for Hossain Consulting. It specifies responsibilities and approval gates without adopting a software stack. It is planning material, not evidence of staffed roles or a live sales system.

## Run locally

Use Node 22.12+ (CI uses Node 22).

```sh
npm ci
npm run dev
npm run type-check
npm run lint
npm run format:check
npm test
npm run build
npm run budget
npx playwright install chromium
npm run test:e2e
```

The production browser tests use port 4317. Unit tests run once, not in watch mode. Browser screenshots are written to test-results/.

## Workflows

- `ci.yml`: type checking, lint, formatting, unit tests, build, gzip budgets and browser tests. Failures block the job.
- `performance.yml`: three Lighthouse mobile lab runs with assertions and downloadable reports on PRs, weekly, or manual dispatch.
- `deploy.yml`: manual **release build artifact only**. It does not deploy; the former workflow name was misleading.

## Targets versus results

The gzip gates enforce 293,000 bytes for initial content and all emitted JS/CSS. Initial accounting includes the immediately loaded Hero; the full total includes the lazy graphics chunk. Lighthouse Phase 2 gates are performance >=85, accessibility >=95, LCP <=2.5s and CLS <=0.1. Performance >90 is the later release target.

FPS, real-device load time, conversion rates, revenue and full WCAG compliance are not established by these checks. A large uncompressed Three.js chunk still generates a Vite advisory, although the gzip gate measures it. Guided demo, onboarding, real CRM/service integrations, detailed scene assets, measured coverage and production-readiness acceptance remain backlog.

The original [architecture outline](ARCHITECTURE.md) describes planned scope, not completion. The reconciled plan takes precedence for status and validation.

## Deployment and AI assistance

The existing Vercel integration deployed the prototype after [PR #1](https://github.com/hossainconsulting/gtmlander/pull/1) merged. [CI passed on the merge commit](https://github.com/hossainconsulting/gtmlander/actions/runs/36137462156). Deployment does not mean the planned lead-processing service is complete.

OpenAI Codex assisted with the progressive Three.js Hero, CI repairs, automated validation, and evidence-based documentation. Hemayet Hossain directed the work and approved the merge. This documentation update records Codex co-authorship without changing historical commit attribution.

Anthropic Claude Code also assisted with development and documentation under Hemayet's direction. Commits it co-authored carry a `Co-Authored-By: Claude` trailer.
