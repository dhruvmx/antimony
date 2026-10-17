# Antimony local prototype

## Run

Requires Node.js 20 or newer. No dependency installation is needed. Three.js is bundled locally for the anatomy illustration.

Open a terminal in this folder and run:

```text
npm start
```

Open http://localhost:4173 in your browser. Leave the terminal running while using the demo. Stop with Ctrl+C. Use the server rather than opening index.html directly so deep links and JavaScript modules work.

Run focused logic tests with `npm test`.

## What works

- Public home, doctor overview, patient review, care-plan editor, patient plan, and commitment preview.
- Three fictional patients with derived progress, overdue counts, search, and filters.
- Shared browser storage, draft isolation, explicit approval, version changes, cancellation reasons, and retained patient history.
- Patient completion, correction, missed reports, difficulties, doctor responses, review and resolution.
- Source-linked predefined simulated AI suggestions, manual editing, missing-schedule validation, rejection, and duplicate prevention.
- Optional INR preview, integer-paise calculations, explicit rounding, and no active participation.
- Direct routes, browser history, unavailable states, unsaved-change confirmation, browser unload protection, reset confirmation, and responsive navigation.

The first visual reference guided the pale blue shell, rounded white cards, pill controls, large headings, and yellow actions. The second informed the main-content and review-sidebar composition. The updated overview includes a central 3D muscular anatomy figure and a silver DNA illustration, with care-plan cards arranged around them. The doctor review has a larger DNA panel. Anatomy is decorative, with front/back controls; no vital-sign measurements, DNA analysis, or booking integrations are implied.

## Demonstration boundaries

All people, tasks, and clinical instructions are fictional. The clock is fixed at 16 October 2026, 12:00 IST. Events intentionally share this timestamp and retain insertion order. Completion is patient-reported. There is no prescription checking, clinical monitoring, authentication, live AI, payment processing, or external messaging. The application makes no network requests other than to its local server.

Data belongs to this browser and origin only. There is no cross-device sync or simultaneous-tab conflict resolution. A failed storage write leaves changes in memory with a visible warning. Invalid stored data loads fictional sample data with a warning. Reset only overwrites the Antimony storage key.

Native HTML dialogs provide modal focus handling and Escape support. Browser unload prompts depend on the browser. This is not a production audit log or a production clinical system.

## Verification performed

Nine focused Node tests passed: seeded cases, overdue completion and correction, cancelled-task denominator, empty and unscheduled tasks, independent report-review state, isolated draft copies, amount validation, half-paise rounding, and schema validation/storage round trip.

Browser checks completed:

- Doctor and patient home entry, patient-preserving role switch, and logo navigation.
- Search no-results and unreviewed-difficulty filtering.
- Saved draft invisible to patient, explicit approval summary, version 2 visible to patient, completion retained through revision, and refresh persistence.
- Patient completion, correction restoring overdue, original difficulty text reaching doctor view, and acknowledgement leaving completion unchanged.
- Published cancellation excluded from active totals and overdue counts while preserving reports and history.
- Unsaved changes dialog, Keep editing and Discard changes.
- Arbitrary text rejected by simulated extraction, source-linked suggestions, schedule errors, and repeated acceptance retaining six total editors instead of duplicating two suggestions.
- INR 123.45 illustrated as 123.45, 61.73, and 0.00; skip returns to the care plan.
- Reset cancellation preserved data; confirmed reset restored samples.
- Invalid patient and page routes, browser Back and Forward.
- Narrow phone commitment view had equal document and viewport widths, with no horizontal overflow. Mobile menu opened and closed with Escape.

A navigation naming collision was found in the first browser pass and fixed before the successful journey. Full keyboard, screen-reader, contrast, all viewport combinations, browser storage denial, and all rapid-click scenarios were not exhaustively exercised. Duplicate completion is guarded in code; it was not stress-tested with concurrent tabs.

## Open owner decisions

Final wording and design remain editable. The criteria for 50% versus zero refund, real-money goal verification, plan changes, exceptions, disputes, and destination of forfeited money remain undecided. Future live AI, production accounts, data handling, and hosting also remain undecided. No public deployment has been performed.

## Files

`app.js` contains routing and UI interactions. `model.js` contains seed data and pure calculations. `style.css` contains the visual system and responsive layouts. `server.mjs` serves the local prototype and route fallback. `tests.mjs` contains focused logic tests.

## Visual update

The overview now uses reference-style anatomy imagery, clickable overdue and review cards, a patient shortcut, and a highlighted next report. The doctor review places the next difficulty first. Patient task secondary actions are grouped under More options, and history is collapsible. Existing saved data is preserved.

The body model requires WebGL. A visible message explains unavailable WebGL or a failed model load. The care controls remain usable. Asset sources, licenses, and the DNA generation prompt are recorded in assets/ASSETS.md. Artwork credits are linked below the model.

Visual-update verification: the model rendered locally, front/back controls worked by mouse and keyboard, quick-filter cards returned the correct patients, the review dialog and secondary task actions remained accessible, and the overview and patient pages had no horizontal overflow at a 390-pixel test viewport. Nine logic tests passed again. No saved patient records were changed during these visual checks.
