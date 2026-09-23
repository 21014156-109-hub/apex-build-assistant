# AI Construction Operations Assistant Demo

## Goal
Build a polished, deterministic SaaS prototype for Apex Commercial Construction that demonstrates one coherent workflow: review Riverside Office Complex, analyze documents, inspect an evidence-backed estimate, compare historical projects, complete a WhatsApp field update, and see the generated report appear in operations.

## Product structure
- Add a persistent desktop-first application shell with a collapsible sidebar, project context, search, notifications, and responsive tablet/mobile navigation.
- Create dedicated pages for Dashboard, Projects, Project Details, AI Estimator, Documents, Historical Projects, Takeoff, Cost Analysis, Field Reports, WhatsApp Agent, Reports, and Settings.
- Keep Riverside Office Complex and the $2,274,850 estimate consistent across every page.
- Use the requested navy, green, neutral, success, warning, and error palette through semantic design tokens.

## Centralized demo model
- Create one typed data source for projects, 20+ documents, 30+ estimate items, five historical projects, 10+ field reports, six workers, 20+ activities, assumptions, takeoff quantities, cost categories, and 30+ WhatsApp messages.
- Include status types for Verified, Supported, Needs Review, and Missing Information.
- Add deterministic `AIService` and `WhatsAppService` interfaces with mock implementations so future APIs can replace them without changing page components.
- Keep prototype state in a shared client-side demo store so document analysis, estimate review, and WhatsApp report submission visibly update related screens during the session.

## Core experiences
1. **Dashboard and projects** — executive metrics, verification breakdown, active projects, recent activity, pending reviews, and clear access to Riverside Office Complex.
2. **Project detail** — project facts, progress, team and risk summary, plus tabs linking to documents, estimate, takeoff, cost breakdown, reports, and activity.
3. **Documents and analysis** — categorized document library with realistic metadata and a short staged analysis dialog ending in the requested analysis summary.
4. **Estimator and trust** — trade summary and 30+ detailed lines; selecting an item opens evidence, source document, historical rate, calculation, verification checks, and “Why this number?” explanation.
5. **Review workflow** — approve, edit, reject, and comment actions; show AI versus human values and record a correction in activity.
6. **Historical knowledge** — five comparable project profiles with similarity, scope, and the specific rates or assumptions used by the estimate.
7. **Takeoff and cost analysis** — a clearly labeled simulated plan preview with selectable overlays, quantity evidence, expandable cost groups, and professional charts.
8. **Assumptions** — separate supported, review-required, and missing-information states with direct links to the affected estimate items.
9. **WhatsApp field workflow** — a realistic phone conversation, simulated photo and voice-message analysis, one-question-at-a-time completion, structured preview, correction, and report submission.
10. **Field report integration** — submitted WhatsApp data appears immediately as a “New report received” entry in Field Reports and dashboard activity.
11. **Reports and settings** — populated report library with demo generate/download/share actions and restrained configuration screens for company, verification, and integrations.

## Interaction and presentation
- Use accessible tables, sheets, dialogs, tabs, accordions, tooltips, charts, progress states, and toasts from the existing component system.
- Keep animations subtle and purposeful, with reduced-motion support.
- Clearly label simulated document, voice, and photo analysis; avoid unsupported accuracy claims.
- Add route-specific page titles, descriptions, Open Graph metadata, and Twitter card metadata.

## Validation
- Check every route and navigation target on desktop and tablet widths, plus the WhatsApp view at mobile width.
- Run focused interaction checks for document analysis, estimate evidence, human correction, WhatsApp submission, and the resulting field report/dashboard update.
- Confirm no overlaps, dead links, inconsistent totals, console errors, runtime errors, or build errors remain.
