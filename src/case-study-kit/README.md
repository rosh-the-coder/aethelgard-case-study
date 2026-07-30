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

## Design tokens

Kit reads CSS variables when present:

`--accent`, `--text`, `--text-muted`, `--text-dim`, `--font-display`

Falls back to Aethelgard atelier defaults.
