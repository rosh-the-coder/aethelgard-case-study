# Diagram System — Aethelgard Case Study

Reusable visual grammar for interactive editorial diagrams.

## Principles

1. **Diagram first, prose second** — captions and takeaways carry the skim.
2. **Static-first** — every interactive diagram is readable with JS off / reduced motion.
3. **No colour-only meaning** — active states also use weight, outline, and text.
4. **One primary interaction pattern per major diagram.**

## Tokens (CSS)

Defined in `src/styles/tokens.css` and `src/styles/diagrams.css`:

| Token | Role |
|---|---|
| `--dg-node-bg` | Default station / node fill |
| `--dg-node-active` | Focused / scroll-active node |
| `--dg-node-muted` | Fragmented / friction nodes |
| `--dg-edge` | Connector stroke |
| `--dg-edge-strong` | Emphasised path |
| `--dg-label` | Node label text |
| `--dg-takeaway` | Takeaway chip border |

## Components (`src/diagrams/`)

| Component | Meaning | Interaction |
|---|---|---|
| `DiagramShell` | Title, optional question, body, takeaways, SR text | None |
| `Takeaways` | 2–3 post-diagram points | None |
| `FlowChain` | Ordered production / tool stages | Optional active index |
| `FrictionChain` | Disconnected old toolchain | Horizontal scroll on mobile |
| `BeforeAfterToggle` | Workflow comparison | Toggle / keyboard |
| `SystemFlow` | Full factory sequence | Click + IntersectionObserver |
| `FactoryMap` | Control-plane stations | Hover / focus / click inspect |
| `AcquisitionTree` | Mode decision tree | Select mode |
| `CompareReveal` | Template ↔ composited | Drag / range input |
| `ArchitectureMap` | Operator → dashboard → modules → FS | Layer expand |
| `DecisionPath` | Failure → new layer | Static + optional highlight |
| `EvolutionTimeline` | Honest Git / artifact stages | Keyboard list |
| `HeroSpine` | Concept → draft spine | Decorative + labelled |
| `TypographyCase` | Compact poster type case | Static compare |
| `ArtifactCard` | Draft / folder evidence | None |

## Node meanings

- **Rectangle node** — process station or tool
- **Rounded accent node** — Aethelgard-owned station
- **Muted dashed node** — external / fragmented tool
- **Diamond / branch** — decision (acquisition mode, human gate)
- **Arrow** — handoff / data flow (not time unless labelled)

## Line meanings

- Solid gold — primary production path
- Dim grey — friction / legacy path
- Dashed — optional / external provider

## Responsive

- ≥1024px: horizontal chains where helpful
- ≤768px: vertical stacks; `FrictionChain` may use controlled overflow-x with scroll hint
- Labels never rely on hover alone on touch

## Accessibility

- `DiagramShell` provides `aria-labelledby` + visually hidden long description
- Interactive controls are buttons / radios / range inputs with visible `:focus-visible`
- `prefers-reduced-motion: reduce` disables scroll-driven auto-advance and CSS transitions >0
- Compare control exposes `aria-valuenow`

## Reuse on theonlyrosh.com

Copy `src/diagrams/*` + `styles/diagrams.css`. Remap colour tokens only. Keep content data in `src/data/*`.
