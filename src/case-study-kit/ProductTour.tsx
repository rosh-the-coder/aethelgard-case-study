import { useState } from 'react'
import { AnnotatedFigure } from './AnnotatedFigure'
import type { ProductTourStep } from './types'

type ProductTourProps = {
  eyebrow?: string
  title: string
  steps: ProductTourStep[]
  layout?: 'keynote' | 'software'
}

export function ProductTour({
  eyebrow = 'Product tour',
  title,
  steps,
  layout = 'keynote',
}: ProductTourProps) {
  const [active, setActive] = useState(0)
  const step = steps[active] ?? steps[0]

  return (
    <section
      className={`csk-tour wow${layout === 'software' ? ' csk-tour--software' : ''}`}
      id="product-tour"
      aria-labelledby="csk-tour-title"
    >
      <div className="csk-tour__intro">
        <p className="csk-eyebrow">{eyebrow}</p>
        <h2 className="csk-tour__title" id="csk-tour-title">
          {title}
        </h2>
      </div>

      <div className="csk-tour__rail" role="tablist" aria-label="Product screens">
        {steps.map((s, i) => (
          <button
            key={s.id}
            type="button"
            role="tab"
            aria-selected={active === i}
            className={active === i ? 'is-active' : undefined}
            onClick={() => setActive(i)}
          >
            <span>{String(i + 1).padStart(2, '0')}</span>
            {s.title}
          </button>
        ))}
      </div>

      <div className="csk-tour__stage" role="tabpanel">
        {layout === 'software' ? (
          <div className="csk-tour__meta">
            {step.purpose ? (
              <p>
                <span>Purpose</span>
                {step.purpose}
              </p>
            ) : null}
            {step.result ? (
              <p>
                <span>Result</span>
                {step.result}
              </p>
            ) : null}
          </div>
        ) : null}
        <AnnotatedFigure
          number={step.figure.number}
          title={step.figure.title}
          caption={step.caption}
          notice={step.callout}
          src={step.figure.src}
          alt={step.figure.alt}
          filename={step.figure.filename}
          status={step.figure.status === 'real' ? 'real' : 'placeholder'}
          annotations={step.figure.annotations}
          size="hero"
        />
        <p className="csk-tour__sentence">{step.sentence}</p>
      </div>
    </section>
  )
}
