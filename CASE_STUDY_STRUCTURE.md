# Case Study Structure — Interactive Visual Narrative

## Central story

> I turned a fragmented manual Etsy production workflow into a software production system.

Aethelgard is presented as a **digital-product factory**, not an image generator, mockup toy, or Etsy script.

## Eight-act progression

| Act | Section id | Purpose | Primary visuals |
|---|---|---|---|
| Hero | `#top` | 5-second system read | Hero spine · summary strip |
| 1 | `#act-1` | Fragmented toolchain | `FrictionChain` · estimate cards |
| 2 | `#act-2` | Manufacture vs assemble | Large statement · `BeforeAfterToggle` |
| 3 | `#act-3` | How the factory thinks | `SystemFlow` · `FactoryMap` · folder sketch |
| 4 | `#act-4` | Acquisition modes | `AcquisitionTree` · compact `TypographyCase` |
| 5 | `#act-5` | Mockup **subsystem** | Progress strip · `CompareReveal` |
| 6 | `#act-6` | Contracts + Etsy API | Contract list · `DecisionPath` · draft evidence |
| 7 | `#act-7` | Evidence + evolution | Numbers · mosaic · `EvolutionTimeline` · screenshot slots |
| 8 | `#act-8` | Reflection + limits + close | Failures · limitations · philosophy steps |

## Interaction strategy (primary patterns)

1. **Toggle** — before/after **system diagrams** (`WorkflowCompare`)
2. **Select / inspect** — production map + signature factory (`SystemFlow`, `FactoryMap`)
3. **Range reveal** — mockup template vs composited (`CompareReveal`)
4. **Product tour tabs** — early UI evidence (`ProductGlance`)
5. **Scroll-assist** — IntersectionObserver active station (reduced-motion safe)

## Early product UI

`#product-glance` appears immediately after the summary strip with large `ProductFigure` placeholders (stable filenames in `figures.ts` / `ASSET_CHECKLIST.md`).

## Mockup sequence

Empty frames removed. Steps use real artwork/final + truthful explanatory SVG diagrams for crop / perspective / lighting / glare (labelled as visualisations, not screenshots).


## Diagrams / visual systems (count ≥ 12)

1. Hero product spine  
2. Project summary strip  
3. Friction toolchain  
4. Friction tags  
5. Before/after workflow toggle  
6. Interactive system flow  
7. Human review gates  
8. Factory map + spine  
9. Folder sketch  
10. Acquisition decision tree  
11. Typography three-step case  
12. Mockup progression strip  
13. Mockup compare reveal  
14. Etsy migration decision path  
15. Draft evidence card  
16. Evidence number grid  
17. Output mosaic  
18. Evolution timeline  
19. Screenshot placeholder slots  
20. Closing philosophy steps  

## Content moved into disclosures

- Architecture trade-offs + component table  
- Mockup warp / luminance / mask detail  
- Etsy OAuth / multipart / disk evidence notes  

## What was reduced

- Long walkthrough prose lists  
- Repeated HITL philosophy blocks  
- Chilli poster dominance (one compact typography case only)  
- Mockup framed as full-product hero (now Act 5 subsystem)  

## Source files

- Narrative data: `src/data/content.ts`  
- Assets: `src/data/assets.ts`  
- Diagrams: `src/diagrams/*`  
- Acts: `src/sections/Act*.tsx`  
- Grammar: `DIAGRAM_SYSTEM.md`  
- Git honesty: `GIT_HISTORY_AUDIT.md`
