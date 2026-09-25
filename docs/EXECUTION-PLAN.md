# GTMlander: reconciled execution plan

Reviewed 2026-09-25. This project-specific plan supersedes conflicting status and dates in the supplied planning documents for work in this repository. Source documents remain historical inputs, not proof of completion.

## Evidence hierarchy

1. Repository code, checks at an identified commit, and measured reports determine actual status.
2. This plan records scope, targets, and remaining gates.
3. The original tracker and schedules express intent. Case studies are drafts until their claims have evidence.

Baseline: `80379f45571e5df319a85341812b5735f7b5b019`. Contrary to the supplied tracker, its latest CI and release workflow failed. CI had JSX lint errors; release build lacked Terser. Tests/type checks could be ignored with `|| true`. The performance job only printed targets; the deployment job did not deploy. No existing EVIDENCE.md, AGENTS.md, or PR convention was found in the repository. Changes use a review branch and PR.

## Dates and scope

September 24, 25, and 26, 2026 are Thursday, Friday, and Saturday, respectively. The supplied Monday/Tuesday/Wednesday labels are incorrect. October 12 is Monday; October 26 is Monday.

The tracker promises a full October 12 launch but schedules Phase 4 through October 26. The updated master plan also contains November 2 completion and November 9 launch milestones. Resolution: October 12 is a **Hero/core review checkpoint**, not a full launch promise. October 26 is an earliest readiness review; November 2 is a contingency review and November 9 a provisional release window. Release requires passed gates and a separate deployment decision. These are planning targets, not delivery guarantees.

| Milestone | Scope | Gate |
| --- | --- | --- |
| Foundation repair, current task | Reproducible install, Tailwind, build, strict CI, real budget and browser checks | Local and PR checks pass |
| Hero/core increment, current task | Procedural nexus, orbit/pulse, scroll camera, selectable stages, responsive geometry, static fallback, solution flow | Functional browser checks; measured Lighthouse report |
| Phase 2 acceptance, by Oct 12 review | Real-device frame-rate and load measurement; remaining scene detail | 60fps desktop / 30fps mobile and Hero <1.5s are targets, not verified results |
| Phase 3, next | Separate guided demo, workflow use cases, particle budget, FAQ search | Interaction tests, performance regression checks |
| Phase 4, readiness review Oct 26 | Onboarding/contact, real service integration, accessibility, measured coverage, content audit | Critical E2E paths, >80% measured coverage, performance >90 and accessibility >95; manual accessibility checks |
| Release, provisional Nov 9 | Approved hosting and operational configuration | Explicit deployment decision and verified live URL |

The next phase is not complete merely because a checkbox in the specification is checked. Three detailed LOD models, internal decision-tree particles, camera selection focus, cinematic lighting and real-device frame-rate validation remain beyond this Hero increment.

## Capacity

The evening schedule allocates 28 hours/week, including seven first-hour learning blocks and 21 project hours. The morning blocks add four hours, for 32 total. Seven rotating projects receive roughly three project hours each week. Four hours/week is the older strategy or future maintenance mode, not the current evening allocation. A four-week GTMlander window therefore has about 12 scheduled project hours unless capacity is explicitly reallocated. Do not silently promise a full seven-layer product in that capacity. Keep the 22:00 stop and move unfinished scope to the next slot.

## Performance budget decision

The specification alternates between a 293KB entire application budget and a <300KB critical-path budget, while separately proposing megabytes of graphics assets. CI now measures gzip bytes, including all immediately loaded Hero code and CSS, rather than looking for a nonexistent dist/index.*.js. This increment enforces **293,000 bytes initial HTML/JS/CSS** and **293,000 bytes all emitted JS/CSS**, including the lazy Three.js chunk in the total. No remote models, textures, or fonts are added. Phase 3 should optimize or revisit the total budget with measurements.

Lighthouse uses median-of-three mobile lab runs with Phase 2 gates: performance >=85, accessibility >=95, LCP <=2500ms, CLS <=0.1. These do not prove real-device FPS, conversion, full WCAG compliance, or production latency. Release performance >90 remains a separate gate. INP should replace legacy FID in future field monitoring; no field dataset exists yet.

## Honest case-study positioning

Current suitable narrative: “Developing a React/TypeScript landing-page prototype with a progressively enhanced Three.js Hero, accessible HTML workflow controls, and automated build/browser/performance gates.”

Do not claim measured 8% trial conversion, 30% trial-to-paid, customer ROI, revenue, customer counts, testimonials, 80% coverage, 60fps, or production readiness without linked supporting records. Both supplied recruiter case-study copies have identical content. Preserve one canonical draft; neither is verification. The agency case study is also a draft, not evidence of a client delivery.

The separate GTM Agents product, Salesforce, AI SDR, courses, certification work, and portfolio sites are not implemented by this landing-page task. Their reported status has not been independently verified here.
