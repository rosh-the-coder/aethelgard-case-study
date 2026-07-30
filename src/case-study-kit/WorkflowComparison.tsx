import { useId, useState } from 'react'
import type { WorkflowComparisonProps } from './types'
import { DiagramCallout } from './DiagramCallout'

export function WorkflowComparison({
  beforeTitle = 'Before',
  afterTitle = 'After',
  beforeSteps,
  afterSteps,
  beforeAside = 'Disconnected · many exports · many subscriptions · repeated actions',
  afterAside = 'One guided production system · shared artifacts · human review',
  notes,
}: WorkflowComparisonProps) {
  const [mode, setMode] = useState<'before' | 'after'>('after')
  const id = useId()

  return (
    <div className="csk-workflow wow">
      <div className="csk-workflow__toggle" role="tablist" aria-label="Workflow comparison">
        <button
          type="button"
          role="tab"
          id={`${id}-before`}
          aria-selected={mode === 'before'}
          className={mode === 'before' ? 'is-active' : undefined}
          onClick={() => setMode('before')}
        >
          {beforeTitle}
        </button>
        <button
          type="button"
          role="tab"
          id={`${id}-after`}
          aria-selected={mode === 'after'}
          className={mode === 'after' ? 'is-active' : undefined}
          onClick={() => setMode('after')}
        >
          {afterTitle}
        </button>
      </div>

      <div
        className={`csk-workflow__canvas csk-workflow__canvas--${mode}`}
        role="tabpanel"
        aria-labelledby={mode === 'before' ? `${id}-before` : `${id}-after`}
      >
        {mode === 'before' ? (
          <div className="csk-workflow__before" aria-label="Fragmented workflow">
            {beforeSteps.map((step, i) => (
              <div key={step.label} className="csk-workflow__b-row">
                <div className="csk-workflow__b-node">{step.label}</div>
                {i < beforeSteps.length - 1 ? (
                  <div className="csk-workflow__gap" aria-hidden="true">
                    <span />
                    <em>{step.friction ?? 'export'}</em>
                    <b>✕</b>
                  </div>
                ) : null}
              </div>
            ))}
            <p className="csk-workflow__aside">{beforeAside}</p>
          </div>
        ) : (
          <div className="csk-workflow__after" aria-label="Unified Aethelgard workflow">
            <div className="csk-workflow__rail">
              {afterSteps.map((step) => (
                <div key={step} className="csk-workflow__a-node">
                  {step}
                </div>
              ))}
            </div>
            <div className="csk-workflow__flowline" aria-hidden="true" />
            <p className="csk-workflow__aside csk-workflow__aside--after">{afterAside}</p>
          </div>
        )}
      </div>

      <div className="csk-workflow__notes">
        {notes.map((n) => (
          <DiagramCallout key={n.label} label={n.label}>
            {n.text}
          </DiagramCallout>
        ))}
      </div>
    </div>
  )
}
