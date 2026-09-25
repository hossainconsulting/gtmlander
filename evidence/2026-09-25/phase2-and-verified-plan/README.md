# Evidence: plan reconciliation, CI repair and Hero increment

Date: 2026-09-25. Target: https://github.com/hossainconsulting/gtmlander
Baseline: 80379f45571e5df319a85341812b5735f7b5b019.

## Baseline verification

- [CI run 36113221528](https://github.com/hossainconsulting/gtmlander/actions/runs/36113221528): failed; JSX apostrophes violated lint in FAQ and Pricing.
- [Release run 36116817163](https://github.com/hossainconsulting/gtmlander/actions/runs/36116817163): failed; Terser missing. That workflow had no actual deployment step.
- performance.yml only echoed targets, not measurements. CI suppressed type/test failures. The tracker supplied different commit hashes, so its completion claim was not accepted as evidence.

## Changes

Added PostCSS/Tailwind wiring, fixed package/version/build configuration, regenerated the tracked lockfile and removed its ignore rule. Upgraded Vite/Vitest to resolve audit findings; preserved React 18 and the existing Three.js generation. Restricted the React DOM-only lint rule exception to Three.js component files.

Implemented a lazy procedural nexus, orbit/pulse motion, scroll camera, mobile geometry reduction, four HTML workflow selectors, keyboard reset, reduced-motion/WebGL/context-loss/low-FPS fallback and offscreen rendering pause. Completed the core solution diagram and changed unsupported trial/integration/ROI claims to product-concept copy. Replaced dead placeholder links with working section navigation.

Reconciled project planning in docs/EXECUTION-PLAN.md and corrected README status. Raw career/business source documents were kept outside this public repository. Duplicate recruiter case-study texts were identical; neither provided independent evidence.

CI now enforces checks without ignoring failures, runs browser tests and checks real gzip output. Performance workflow runs Lighthouse assertions and saves reports. The former deployment workflow is explicitly a manual release artifact build, without deployment.

## Actual local validation

See validation.txt for commands and exit codes. TypeScript, ESLint, formatting, unit test, build, gzip budget, and six browser tests passed. Unit test verifies pre-WebGL content; browser tests cover desktop/mobile Chromium, keyboard stage selection/reset, reduced-motion no-3D-download behavior, WebGL-unavailable controls, no horizontal overflow and animated-to-static transition.

Build measurement: initial HTML/JS/CSS 54,365 gzip bytes; all JS/CSS 263,636 gzip bytes. Both are below 293,000. Vite still warns about the ~802KB uncompressed lazy graphics chunk; the gzip measurement includes it.

Lighthouse CLI 0.15.1 collected three mobile lab runs. Performance scores: 88, 90, 90; accessibility: 100 each. LCP: about 2.43 seconds; CLS about 0.01. Configured median assertions passed. See lighthouse-summary.json. These measurements precede only documentation/test-screenshot changes; application/build content is unchanged.

npm-audit.json records zero known dependency vulnerabilities at validation time. Browser screenshots show the implemented prototype, not a production site.

## Limitations

Not deployed. This is a Hero/core increment, not complete Phase 2 acceptance or all seven layers. Real-device FPS/load, full WCAG audit, measured >80% coverage, detailed scene assets, guided demo, onboarding, backend integrations, business conversions and revenue remain unverified/backlog. Chromium mobile emulation is not iOS Safari hardware validation. Lighthouse performance >90 remains a release target, not established by these median scores.

No secrets, source personal plans, customer records, credentials or raw debug logs are included. Local validation paths are sanitized. Historical failed workflow runs remain failed; a new PR run verifies the fixes.

## Measurement references

- [Vite manifest schema](https://vite.dev/guide/backend-integration): static imports versus dynamic imports for initial budget accounting.
- [Lighthouse CI configuration](https://github.com/GoogleChrome/lighthouse-ci/blob/main/docs/configuration.md): collection and median assertion settings.
