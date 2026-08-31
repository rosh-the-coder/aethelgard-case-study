import { ReflectionQuote } from '../case-study-kit'
import { act8 } from '../data/content'

/** ACT 6 — Reflection. */
export function Act6Reflection() {
  return (
    <>
      <ReflectionQuote>{act8.paragraphs[0]}</ReflectionQuote>

      <section className="section" id="act-6" aria-labelledby="act6-title">
        <div className="container container-narrow">
          <p className="eyebrow">What this changed about how I build</p>
          <h2 className="section-title" id="act6-title">
            {act8.title}
          </h2>
          <div className="prose">
            {act8.paragraphs.slice(1).map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>

          <ul className="fail-list" style={{ marginTop: '2rem' }}>
            {act8.failures.map((item) => (
              <li key={item.fail}>
                <div className="fail">
                  <span className="label">Wall</span>
                  {item.fail}
                </div>
                <div className="fix">
                  <span className="label">New layer</span>
                  {item.fix}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--flush" id="limitations" aria-labelledby="limitations-title">
        <div className="container">
          <p className="eyebrow">Limitations</p>
          <h2 className="section-title" id="limitations-title">
            Honest MVP boundaries.
          </h2>
          <ul className="limit-list">
            {act8.limitations.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="closing section--flush" id="closing" aria-labelledby="closing-title">
        <div className="container">
          <h2 className="visually-hidden" id="closing-title">
            Closing
          </h2>
          <ol className="closing-steps">
            {act8.closingSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <p className="closing-statement">{act8.closing}</p>
        </div>
      </section>
    </>
  )
}
