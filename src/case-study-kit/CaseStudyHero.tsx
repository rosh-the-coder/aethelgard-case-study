import type { CaseStudyHeroProps } from './types'

export function CaseStudyHero({
  name,
  productLabel,
  pipeline,
  supportingLine,
  mediaSrc,
  mediaAlt = '',
  storyLine,
  meta,
}: CaseStudyHeroProps) {
  return (
    <section className="csk-hero" id="top" aria-labelledby="csk-hero-title">
      <div className="csk-hero__media" aria-hidden="true">
        <img src={mediaSrc} alt={mediaAlt} />
      </div>
      <div className="csk-hero__veil" aria-hidden="true" />
      <div className="csk-hero__inner">
        <h1 className="csk-hero__name" id="csk-hero-title">
          {name}
        </h1>
        <p className="csk-hero__product">{productLabel}</p>
        <ol className="csk-hero__pipeline" aria-label="Product pipeline">
          {pipeline.map((step, i) => (
            <li key={step}>
              <span>{step}</span>
              {i < pipeline.length - 1 ? <i aria-hidden="true">→</i> : null}
            </li>
          ))}
        </ol>
        {supportingLine ? <p className="csk-hero__support">{supportingLine}</p> : null}
        {storyLine ? <p className="csk-hero__story">{storyLine}</p> : null}
        {meta && meta.length > 0 ? (
          <dl className="csk-hero__meta">
            {meta.map((m) => (
              <div key={m.label}>
                <dt>{m.label}</dt>
                <dd>{m.value}</dd>
              </div>
            ))}
          </dl>
        ) : null}
      </div>
    </section>
  )
}
