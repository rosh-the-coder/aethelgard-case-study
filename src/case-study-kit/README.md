# Case Study Kit

Reusable storytelling components for portfolio case studies (Aethelgard, CareerOS, RedVelvetVault, Irish AI Creative).

## Components

| Component | Role |
|---|---|
| `CaseStudyHero` | Brand + product pipeline in 5 seconds |
| `SummaryStrip` | Meta rail |
| `ProductTour` | Keynote-style product screens |
| `WorkflowComparison` | Before/after system infographic |
| `FactoryDiagram` | Signature manufacturing map |
| `AliveFactory` | Animated station pipeline |
| `AnnotatedFigure` | Figure + numbered hotspots |
| `DiagramCallout` | Tiny labelled note |
| `EvidenceGrid` | Big numbers + mosaic |
| `TechDeepDive` | Single accessible disclosure |
| `ReflectionQuote` | Huge editorial quote |
| `ProcessTimeline` | Multi-step process strip |
| `BlueprintSection` | One-time visual language break |

## Usage

```tsx
import {
  CaseStudyHero,
  ProductTour,
  FactoryDiagram,
  WorkflowComparison,
  AnnotatedFigure,
  EvidenceGrid,
  TechDeepDive,
  ReflectionQuote,
  ProcessTimeline,
  BlueprintSection,
  SummaryStrip,
} from './case-study-kit'
import './case-study-kit/kit.css'
```

Pass project-specific content via props. Do not bake Aethelgard copy into the kit.

## Drop-in screenshots

Place captures in `public/assets/screens/` using the figure basename:

- `dashboard-overview.webp` (or `.png` / `.jpg` / `.svg`)
- `research-screen.webp`
- `generation-screen.webp`
- …

`AnnotatedFigure` auto-resolves the first matching file. SVG placeholders ship by default so the page never looks empty.

Kit reads CSS variables when present:

`--accent`, `--text`, `--text-muted`, `--text-dim`, `--font-display`

Falls back to Aethelgard atelier defaults.
