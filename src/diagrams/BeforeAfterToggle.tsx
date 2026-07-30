import { useId, useState } from 'react'

type BeforeAfterToggleProps = {
  beforeLabel: string
  afterLabel: string
  beforeBody: string
  afterBody: string
  beforeSteps: string[]
  afterSteps: string[]
}

export function BeforeAfterToggle({
  beforeLabel,
  afterLabel,
  beforeBody,
  afterBody,
  beforeSteps,
  afterSteps,
}: BeforeAfterToggleProps) {
  const [mode, setMode] = useState<'before' | 'after'>('after')
  const id = useId()
  const steps = mode === 'before' ? beforeSteps : afterSteps

  return (
    <div className="ba-toggle">
      <div className="ba-toggle__controls" role="tablist" aria-label="Workflow comparison">
        <button
          type="button"
          role="tab"
          id={`${id}-before`}
          aria-selected={mode === 'before'}
          className={mode === 'before' ? 'is-active' : undefined}
          onClick={() => setMode('before')}
        >
          {beforeLabel}
        </button>
        <button
          type="button"
          role="tab"
          id={`${id}-after`}
          aria-selected={mode === 'after'}
          className={mode === 'after' ? 'is-active' : undefined}
          onClick={() => setMode('after')}
        >
          {afterLabel}
        </button>
      </div>
      <div
        className={`ba-toggle__panel ba-toggle__panel--${mode}`}
        role="tabpanel"
        aria-labelledby={mode === 'before' ? `${id}-before` : `${id}-after`}
      >
        <p className="ba-toggle__summary">{mode === 'before' ? beforeBody : afterBody}</p>
        <ol className="ba-toggle__steps">
          {steps.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ol>
      </div>
    </div>
  )
}
