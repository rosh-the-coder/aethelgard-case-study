# Integration into theonlyrosh.com

Portable interactive case study. Prefer route-level integration over rewriting.

## Copy

```text
src/components/
src/diagrams/          ← required for interactive visuals
src/hooks/             ← reduced-motion + IntersectionObserver helpers
src/sections/
src/data/
src/styles/            ← tokens, components, sections, diagrams.css
public/assets/
App.tsx → AethelgardCaseStudy.tsx
```

## Dependencies

Runtime: `react`, `react-dom` only.  
No charting libraries. Diagrams are CSS + lightweight React.

## Styles to import

```ts
import './styles/tokens.css'
import './styles/components.css'
import './styles/sections.css'
import './styles/diagrams.css'
```

Scope under `.aethelgard-case-study` if portfolio tokens collide. Remap `--accent`, `--bg`, `--text` as needed.

## Motion & scroll

- IntersectionObserver drives active production stations (`useInViewActive`)
- `prefers-reduced-motion: reduce` disables auto-advance and CSS transitions
- Compare control is a native `<input type="range">` (keyboard + touch)
- No continuous RAF loops

## Assets

Update paths in `src/data/assets.ts` to site-absolute URLs, e.g. `/case-studies/aethelgard/...`.

Lazy-loaded mosaics use native `loading="lazy"`.

## Route chrome

Wrap with portfolio next/previous project nav. Replace `SiteNav` if the site header already exists.

## Smoke checklist

- [ ] Hero + summary strip render
- [ ] Friction chain scrolls on mobile without clipping labels
- [ ] System flow keyboard-focusable; reduced-motion selects without scroll coupling
- [ ] Compare range works on touch
- [ ] Disclosures accessible
- [ ] Evidence mosaic + draft card load
- [ ] No CLS from diagram grids
- [ ] Meta title/description for `/work/aethelgard`
