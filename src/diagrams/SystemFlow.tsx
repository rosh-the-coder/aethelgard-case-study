import { ProductFigure } from '../components/ProductFigure'
import { flowFigureByStage } from '../data/figures'
import { useInViewActive } from '../hooks/useInViewActive'

export type FlowStep = {
  id: string
  label: string
  detail: string
  actor: 'AI' | 'code' | 'human' | 'API' | 'mixed'
  input: string
  output: string
}

type SystemFlowProps = {
  steps: FlowStep[]
  reviewGates: string[]
}

const actorLabel: Record<FlowStep['actor'], string> = {
  AI: 'AI',
  code: 'Code',
  human: 'Human',
  API: 'External API',
  mixed: 'AI + code',
}

export function SystemFlow({ steps, reviewGates }: SystemFlowProps) {
  const { active, setActive, setRef, reduced } = useInViewActive(steps.length)
  const step = steps[active] ?? steps[0]
  const figure = flowFigureByStage[step.id]

  return (
    <div className="system-flow system-flow--map">
      <div className="system-flow__layout">
        <div className="system-flow__sticky">
          <div className="system-flow__track" role="list" aria-label="Production stations">
            {steps.map((s, i) => (
              <button
                key={s.id}
                type="button"
                role="listitem"
                ref={(el) => {
                  setRef(i)(el)
                }}
                className={`system-flow__node${active === i ? ' is-active' : ''}`}
                aria-current={active === i ? 'step' : undefined}
                onClick={() => setActive(i)}
              >
                <span className="system-flow__n">{String(i + 1).padStart(2, '0')}</span>
                <span className="system-flow__label">{s.label}</span>
                <span className="system-flow__actor">{actorLabel[s.actor]}</span>
              </button>
            ))}
          </div>
          <div className="system-flow__progress" aria-hidden="true">
            <div style={{ width: `${((active + 1) / steps.length) * 100}%` }} />
          </div>
        </div>

        <div className="system-flow__detail" aria-live="polite">
          <p className="system-flow__detail-label">{step.label}</p>
          <p>{step.detail}</p>
          <dl className="system-flow__io">
            <div>
              <dt>Actor</dt>
              <dd>{actorLabel[step.actor]}</dd>
            </div>
            <div>
              <dt>Input</dt>
              <dd>{step.input}</dd>
            </div>
            <div>
              <dt>Output</dt>
              <dd>{step.output}</dd>
            </div>
          </dl>
          {figure ? <ProductFigure figure={figure} variant="panel" showCaptureMeta={false} /> : null}
          <p className="system-flow__hint">
            {reduced
              ? 'Select a station to inspect it.'
              : 'Click a station or scroll — the active step follows your place on the page.'}
          </p>
        </div>
      </div>

      <div className="system-flow__gates">
        <p className="system-flow__gates-title">Human review before publish</p>
        <ul>
          {reviewGates.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
