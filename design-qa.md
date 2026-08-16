# Design QA

- Source visual truth: the two provided reference images covering the left rail and the dark typography/content direction.
- Implementation screenshot: not captured; the user explicitly requires rendered-output review to be left to them.
- Intended viewport: 1536 × 1024 desktop, with an explicit mobile menu below 820px.
- Intended state: dark theme, rail expanded on hover or keyboard focus; light theme available and persisted under `harsh-theme`.

## Full-view comparison evidence

Blocked. The source references were opened and reviewed, but opening or capturing the rendered implementation would violate the user's standing instruction not to inspect the output in a browser.

## Focused-region comparison evidence

Blocked for the same reason. The rail, theme controls, route layouts, text rows, filter controls, and mobile overlay were checked from source contracts only.

## Findings

- [P1] Rendered fidelity cannot be verified.
  - Location: all portfolio routes and interactive rail states.
  - Evidence: no implementation screenshot or browser-rendered interaction evidence is permitted.
  - Impact: typography metrics, visual spacing, clipping, and exact reference fidelity remain for the user to confirm.
  - Fix: user reviews the deployed portfolio and reports any visual mismatch for a follow-up source revision.

## Code-level checks completed

- TypeScript typecheck and Vite production build pass.
- Route navigation, theme persistence, keyboard Escape behavior, mobile overlay controls, project filtering, and Resume hrefs were reviewed in source.
- Static source scan confirms the design contains no gradients, glow, or shadow effects and uses the exact visible label `Resume`.
- Stale or unsupported experience metrics and terminology were removed or corrected.

## Comparison history

- No visual comparison iterations were performed because rendered-output inspection is prohibited by the user.

## Implementation checklist

- User checks every route in desktop dark and light modes.
- User checks hover/focus rail behavior and the mobile Menu/Close overlay.
- User checks shared theme persistence with the root site and the Resume download.

final result: blocked
