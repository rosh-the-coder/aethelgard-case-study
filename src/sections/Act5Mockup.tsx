import type { ReactNode } from 'react'
import { ProcessTimeline, TechDeepDive } from '../case-study-kit'
import { CompareReveal } from '../diagrams/CompareReveal'
import { DiagramShell } from '../diagrams/DiagramShell'
import { assets } from '../data/assets'
import { act5 } from '../data/content'

function CropVisual() {
  return (
    <svg viewBox="0 0 160 200" role="img" aria-label="Cover crop diagram">
      <rect width="160" height="200" fill="#1a1612" />
      <rect x="35" y="40" width="90" height="120" fill="rgba(197,168,128,0.22)" stroke="#c5a880" />
      <text x="80" y="108" textAnchor="middle" fill="#c5a880" fontSize="11">
        crop
      </text>
    </svg>
  )
}

function PerspectiveVisual() {
  return (
    <svg viewBox="0 0 160 200" role="img" aria-label="Perspective warp diagram">
      <rect width="160" height="200" fill="#14110e" />
      <polygon points="45,55 115,48 122,150 38,158" fill="rgba(197,168,128,0.28)" stroke="#c5a880" strokeWidth="2" />
    </svg>
  )
}

function LightingVisual() {
  return (
    <svg viewBox="0 0 160 200" role="img" aria-label="Lighting mask diagram">
      <defs>
        <linearGradient id="csk-lum" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f0e6d4" />
          <stop offset="100%" stopColor="#2a2218" />
        </linearGradient>
      </defs>
      <rect width="160" height="200" fill="url(#csk-lum)" />
    </svg>
  )
}

function GlareVisual() {
  return (
    <svg viewBox="0 0 160 200" role="img" aria-label="Glare and shadow layers">
      <rect width="160" height="200" fill="#1a1612" />
      <ellipse cx="95" cy="60" rx="40" ry="18" fill="rgba(255,255,255,0.35)" />
      <ellipse cx="80" cy="170" rx="50" ry="10" fill="rgba(0,0,0,0.55)" />
    </svg>
  )
}

const visuals: Record<string, ReactNode> = {
  artwork: <img src={assets.mockupProgress.artwork.src} alt={assets.mockupProgress.artwork.alt} />,
  crop: <CropVisual />,
  perspective: <PerspectiveVisual />,
  lighting: <LightingVisual />,
  glare: <GlareVisual />,
  final: <img src={assets.mockupProgress.final.src} alt={assets.mockupProgress.final.alt} />,
}

export function Act5Mockup() {
  return (
    <section className="section section--feature" id="act-5" aria-labelledby="act5-title">
      <div className="container">
        <p className="eyebrow">{act5.eyebrow}</p>
        <h2 className="section-title section-title--wide" id="act5-title">
          {act5.title}
        </h2>
        <p className="lead lead--short">{act5.lead}</p>

        <ProcessTimeline
          items={act5.pipeline.map((step) => ({
            id: step.id,
            label: step.label,
            detail: step.note,
            kind: step.kind,
            visual: visuals[step.id],
            note: step.kind === 'diagram' ? 'Explanatory visualisation' : undefined,
          }))}
        />

        <DiagramShell
          id="mockup-compare"
          question={act5.question}
          title="Template → composite"
          description="Range reveal between empty template and composited mockup."
          takeaways={act5.takeaways}
        >
          <CompareReveal
            beforeSrc={assets.mockupProgress.shelfBlank.src}
            beforeAlt={assets.mockupProgress.shelfBlank.alt}
            afterSrc={assets.mockupProgress.shelfComposed.src}
            afterAlt={assets.mockupProgress.shelfComposed.alt}
          />
        </DiagramShell>

        <TechDeepDive title="Warp, luminance, masks">
          {act5.tech.map((item) => (
            <p key={item.title}>
              <strong>{item.title}.</strong> {item.body}
            </p>
          ))}
        </TechDeepDive>
      </div>
    </section>
  )
}
