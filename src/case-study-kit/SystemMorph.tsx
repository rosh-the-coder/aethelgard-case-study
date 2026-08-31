type FrictionStep = { label: string; friction?: string }

type SystemMorphProps = {
  title?: string
  beforeTitle?: string
  afterTitle?: string
  beforeSteps?: FrictionStep[]
  notes?: { label: string; text: string }[]
}

const defaultBefore: FrictionStep[] = [
  { label: 'Research', friction: 'copy' },
  { label: 'Generate', friction: 'download' },
  { label: 'Photoshop', friction: 'export' },
  { label: 'Upscaler', friction: 'rename' },
  { label: 'Mockups', friction: 'export' },
  { label: 'SEO', friction: 'copy' },
  { label: 'Packaging', friction: 'upload' },
  { label: 'Seller Manager', friction: 'manual entry' },
]

const afterSpine = ['Research', 'Acquire', 'Select', 'Master'] as const
const afterParallel = ['Print', 'Mockups', 'SEO'] as const
const afterTail = ['Package', 'Etsy draft', 'Human review'] as const
const artifacts = [
  'candidate set',
  'master',
  'print pack',
  'mockup set',
  'metadata',
  'delivery PDF',
  'Etsy draft',
] as const

/** True side-by-side before/after production-system infographic. */
export function SystemMorph({
  title = 'From nine disconnected steps to one production system',
  beforeTitle = 'Before Aethelgard',
  afterTitle = 'After Aethelgard',
  beforeSteps = defaultBefore,
  notes = [
    { label: 'Chaos', text: 'Many exports. Many subscriptions. Many handoffs.' },
    { label: 'Factory', text: 'One guided production system with shared artifacts.' },
    { label: 'Control', text: 'Publication remains human-controlled.' },
  ],
}: SystemMorphProps) {
  return (
    <div className="csk-morph wow" aria-label={title}>
      <h3 className="csk-morph__title">{title}</h3>

      <div className="csk-morph__grid">
        <article className="csk-morph__pane csk-morph__pane--before" aria-label={beforeTitle}>
          <header className="csk-morph__pane-head">
            <span className="csk-morph__badge csk-morph__badge--warn">Before</span>
            <h4>{beforeTitle}</h4>
            <p>Disconnected tools · broken handoffs</p>
          </header>

          <ol className="csk-morph__chain">
            {beforeSteps.map((step, i) => (
              <li key={step.label} className="csk-morph__chain-item">
                <div className="csk-morph__tool">{step.label}</div>
                {i < beforeSteps.length - 1 ? (
                  <div className="csk-morph__break" aria-hidden="true">
                    <span className="csk-morph__dash" />
                    <em>{step.friction ?? 'export'}</em>
                    <b>×</b>
                    <span className="csk-morph__dash csk-morph__dash--gap" />
                  </div>
                ) : null}
              </li>
            ))}
          </ol>
        </article>

        <article className="csk-morph__pane csk-morph__pane--after" aria-label={afterTitle}>
          <header className="csk-morph__pane-head">
            <span className="csk-morph__badge">After</span>
            <h4>{afterTitle}</h4>
            <p>One coordinated production system</p>
          </header>

          <div className="csk-morph__system">
            <div className="csk-morph__row" aria-label="Intake to master">
              {afterSpine.map((label, i) => (
                <div key={label} className="csk-morph__sys-wrap">
                  <div className="csk-morph__sys-node">{label}</div>
                  {i < afterSpine.length - 1 ? (
                    <span className="csk-morph__link" aria-hidden="true" />
                  ) : null}
                </div>
              ))}
            </div>

            <div className="csk-morph__fan" aria-label="Shared master production">
              <p className="csk-morph__fan-label">Shared master state</p>
              <div className="csk-morph__fan-nodes">
                {afterParallel.map((label) => (
                  <div key={label} className="csk-morph__sys-node csk-morph__sys-node--branch">
                    {label}
                  </div>
                ))}
              </div>
            </div>

            <div className="csk-morph__row" aria-label="Package to review">
              {afterTail.map((label, i) => (
                <div key={label} className="csk-morph__sys-wrap">
                  <div
                    className={`csk-morph__sys-node${label === 'Human review' ? ' csk-morph__sys-node--human' : ''}`}
                  >
                    {label}
                  </div>
                  {i < afterTail.length - 1 ? (
                    <span className="csk-morph__link" aria-hidden="true" />
                  ) : null}
                </div>
              ))}
            </div>

            <ul className="csk-morph__chips" aria-label="Artifacts">
              {artifacts.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
        </article>
      </div>

      {notes.length > 0 ? (
        <ul className="csk-morph__notes">
          {notes.map((n) => (
            <li key={n.label}>
              <strong>{n.label}</strong>
              <span>{n.text}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}
