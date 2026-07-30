import { useState } from 'react'
import { ProductFigure } from '../components/ProductFigure'
import type { ProductFigureDef } from '../data/figures'

export type IntakeMode = {
  id: string
  title: string
  rule: string
  body: string
  output: string
  figure: ProductFigureDef
}

type AcquisitionTreeProps = {
  modes: IntakeMode[]
}

export function AcquisitionTree({ modes }: AcquisitionTreeProps) {
  const [active, setActive] = useState(modes[0]?.id ?? '')
  const current = modes.find((m) => m.id === active) ?? modes[0]

  return (
    <div className="acq-visual">
      <p className="acq-visual__q">What kind of artwork is entering the system?</p>
      <div className="acq-visual__root" aria-hidden="true">
        Concept → Choose acquisition mode
      </div>
      <div className="acq-visual__modes" role="radiogroup" aria-label="Acquisition mode">
        {modes.map((m) => (
          <button
            key={m.id}
            type="button"
            role="radio"
            aria-checked={active === m.id}
            className={active === m.id ? 'is-active' : undefined}
            onClick={() => setActive(m.id)}
          >
            <strong>{m.title}</strong>
            <span>{m.rule}</span>
          </button>
        ))}
      </div>
      <div className="acq-visual__detail">
        <ProductFigure figure={current.figure} variant="inline" />
        <div>
          <p className="acq-visual__body">{current.body}</p>
          <p className="acq-visual__out">
            <strong>Output artifact:</strong> {current.output}
          </p>
        </div>
      </div>
      <p className="acq-visual__merge">→ Shared production: finalise · prints · mockups · SEO · draft</p>
    </div>
  )
}
