import { assets } from '../data/assets'

type MockupStep = {
  id: string
  label: string
  kind: 'real' | 'diagram'
  note: string
}

type MockupSequenceProps = {
  steps: MockupStep[]
}

export type { MockupStep }

function DiagramCrop() {
  return (
    <svg className="mockup-diagram" viewBox="0 0 160 200" role="img" aria-label="Cover crop frame outline">
      <rect x="20" y="10" width="120" height="180" fill="none" stroke="currentColor" strokeDasharray="4 3" />
      <rect x="35" y="40" width="90" height="120" fill="rgba(197,168,128,0.2)" stroke="#c5a880" />
      <text x="80" y="105" textAnchor="middle" fill="#c5a880" fontSize="11">
        cover crop
      </text>
    </svg>
  )
}

function DiagramPerspective() {
  return (
    <svg className="mockup-diagram" viewBox="0 0 160 200" role="img" aria-label="Perspective quadrilateral overlay">
      <rect width="160" height="200" fill="#14110e" />
      <rect x="18" y="28" width="124" height="144" fill="#1e1914" stroke="rgba(197,168,128,0.25)" />
      <polygon points="45,55 115,48 122,150 38,158" fill="rgba(197,168,128,0.28)" stroke="#c5a880" strokeWidth="2" />
      <circle cx="45" cy="55" r="3" fill="#c5a880" />
      <circle cx="115" cy="48" r="3" fill="#c5a880" />
      <circle cx="122" cy="150" r="3" fill="#c5a880" />
      <circle cx="38" cy="158" r="3" fill="#c5a880" />
      <text x="80" y="185" textAnchor="middle" fill="#857868" fontSize="9">
        frame corners → warp
      </text>
    </svg>
  )
}

function DiagramLighting() {
  return (
    <svg className="mockup-diagram" viewBox="0 0 160 200" role="img" aria-label="Explanatory luminance map illustration">
      <defs>
        <linearGradient id="lum" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f0e6d4" />
          <stop offset="55%" stopColor="#8a7358" />
          <stop offset="100%" stopColor="#2a2218" />
        </linearGradient>
      </defs>
      <rect width="160" height="200" fill="url(#lum)" />
      <text x="80" y="105" textAnchor="middle" fill="#0c0b0a" fontSize="11" fontWeight="600">
        luminance map
      </text>
      <text x="80" y="122" textAnchor="middle" fill="#0c0b0a" fontSize="9">
        explanatory — not a screenshot
      </text>
    </svg>
  )
}

function DiagramGlare() {
  return (
    <svg className="mockup-diagram" viewBox="0 0 160 200" role="img" aria-label="Glare highlight and contact shadow layers">
      <rect width="160" height="200" fill="#1a1612" />
      <ellipse cx="95" cy="60" rx="40" ry="18" fill="rgba(255,255,255,0.35)" />
      <ellipse cx="80" cy="170" rx="50" ry="10" fill="rgba(0,0,0,0.55)" />
      <text x="80" y="110" textAnchor="middle" fill="#c5a880" fontSize="11">
        glare + shadow
      </text>
      <text x="80" y="126" textAnchor="middle" fill="#857868" fontSize="9">
        explanatory layers
      </text>
    </svg>
  )
}

export function MockupSequence({ steps }: MockupSequenceProps) {
  return (
    <ol className="mockup-progress mockup-progress--filled" aria-label="Mockup compositing progression">
      {steps.map((step, index) => (
        <li key={step.id} className={`mockup-progress__step mockup-progress__step--${step.id}`}>
          <span className="mockup-progress__index">{String(index + 1).padStart(2, '0')}</span>
          <span className="mockup-progress__label">{step.label}</span>
          <div className="mockup-progress__visual">
            {step.id === 'artwork' ? (
              <img src={assets.mockupProgress.artwork.src} alt={assets.mockupProgress.artwork.alt} />
            ) : null}
            {step.id === 'crop' ? <DiagramCrop /> : null}
            {step.id === 'perspective' ? <DiagramPerspective /> : null}
            {step.id === 'lighting' ? <DiagramLighting /> : null}
            {step.id === 'glare' ? <DiagramGlare /> : null}
            {step.id === 'final' ? (
              <img src={assets.mockupProgress.final.src} alt={assets.mockupProgress.final.alt} />
            ) : null}
          </div>
          <p className="mockup-progress__note">
            {step.kind === 'diagram' ? 'Explanatory visualisation — not a product screenshot. ' : ''}
            {step.note}
          </p>
        </li>
      ))}
    </ol>
  )
}
