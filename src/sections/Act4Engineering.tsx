import type { ReactNode } from 'react'
import { ProcessTimeline, TechDeepDive } from '../case-study-kit'
import { AcquisitionTree } from '../diagrams/AcquisitionTree'
import { CompareReveal } from '../diagrams/CompareReveal'
import { DecisionPath } from '../diagrams/DecisionPath'
import { DiagramShell } from '../diagrams/DiagramShell'
import { TypographyCase } from '../diagrams/TypographyCase'
import { assets } from '../data/assets'
import { act3, act4, act5, act6 } from '../data/content'
import { figures } from '../data/figures'

const modeFigures = {
  ai: figures.modeAi,
  pd: figures.modePd,
  poster: figures.modePoster,
} as const

function CropVisual() {
  return (
    <svg viewBox="0 0 160 200" role="img" aria-label="Cover crop diagram">
      <rect width="160" height="200" fill="#1a1612" />
      <rect x="35" y="40" width="90" height="120" fill="rgba(197,168,128,0.22)" stroke="#c5a880" />
    </svg>
  )
}

function PerspectiveVisual() {
  return (
    <svg viewBox="0 0 160 200" role="img" aria-label="Perspective warp">
      <rect width="160" height="200" fill="#14110e" />
      <polygon
        points="45,55 115,48 122,150 38,158"
        fill="rgba(197,168,128,0.28)"
        stroke="#c5a880"
        strokeWidth="2"
      />
    </svg>
  )
}

function LightingVisual() {
  return (
    <svg viewBox="0 0 160 200" role="img" aria-label="Lighting mask">
      <defs>
        <linearGradient id="eng-lum" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f0e6d4" />
          <stop offset="100%" stopColor="#2a2218" />
        </linearGradient>
      </defs>
      <rect width="160" height="200" fill="url(#eng-lum)" />
    </svg>
  )
}

function GlareVisual() {
  return (
    <svg viewBox="0 0 160 200" role="img" aria-label="Glare and shadow">
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

/** Engineering deep dives — no duplicate factory map. */
export function Act4Engineering() {
  const modes = act4.modes.map((m) => ({
    ...m,
    figure: modeFigures[m.id as keyof typeof modeFigures],
  }))
  const { etsy } = act6

  return (
    <section className="section section--visual" id="act-4" aria-labelledby="act4-title">
      <div className="container">
        <p className="eyebrow">Engineering deep dives</p>
        <h2 className="section-title section-title--wide" id="act4-title">
          How the hard parts are engineered.
        </h2>
        <p className="lead lead--short">
          Acquisition modes, deterministic typography, mockup compositing, and the Etsy Open API
          path — the layers that make the factory reliable.
        </p>

        <DiagramShell
          id="acquisition-tree"
          question={act4.question}
          title="Visual intake decision tree"
          description="Three acquisition modes rejoining shared production."
          takeaways={act4.takeaways}
        >
          <AcquisitionTree modes={modes} />
        </DiagramShell>

        <DiagramShell
          id="typography-case"
          title="Deterministic typography"
          description="Problem, decision, and result for unreliable model text."
          className="diagram--spaced"
        >
          <TypographyCase
            problem={act4.typography.problem}
            decision={act4.typography.decision}
            result={act4.typography.result}
            beforeSrc={assets.artwork.chilliBase.src}
            beforeAlt={assets.artwork.chilliBase.alt}
            afterSrc={assets.artwork.chilli.src}
            afterAlt={assets.artwork.chilli.alt}
          />
        </DiagramShell>

        <h3 className="section-title section-title--sm" style={{ marginTop: '3rem' }}>
          {act5.title}
        </h3>
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
          className="diagram--spaced"
        >
          <CompareReveal
            beforeSrc={assets.mockupProgress.shelfBlank.src}
            beforeAlt={assets.mockupProgress.shelfBlank.alt}
            afterSrc={assets.mockupProgress.shelfComposed.src}
            afterAlt={assets.mockupProgress.shelfComposed.alt}
          />
        </DiagramShell>

        <ul className="contract-list" style={{ marginTop: '2.5rem' }}>
          {act6.contracts.map((c) => (
            <li key={c.title}>
              <strong>{c.title}</strong>
              <span>{c.body}</span>
            </li>
          ))}
        </ul>

        <DiagramShell
          id="etsy-path"
          question="What happens when UI automation fails?"
          title={etsy.title}
          description="Migration from browser automation to Open API v3 drafts."
          takeaways={act6.takeaways}
          className="diagram--spaced"
        >
          <DecisionPath steps={etsy.path} />
        </DiagramShell>

        <TechDeepDive title="Architecture trade-offs & OAuth evidence">
          <ul>
            {act3.whyFit.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <ul>
            {act3.tradeoffs.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          {etsy.tech.map((item) => (
            <p key={item.title}>
              <strong>{item.title}.</strong> {item.body}
            </p>
          ))}
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
