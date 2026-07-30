import { DiagramShell } from '../diagrams/DiagramShell'
import { FrictionChain } from '../diagrams/FrictionChain'
import { act1 } from '../data/content'

export function Act1Fragmented() {
  return (
    <section className="section" id="act-1" aria-labelledby="act1-title">
      <div className="container">
        <p className="eyebrow">{act1.eyebrow}</p>
        <h2 className="section-title" id="act1-title">
          {act1.title}
        </h2>
        <p className="lead lead--short">{act1.intro}</p>

        <DiagramShell
          id="friction-chain"
          question={act1.question}
          title="Nine disconnected stages"
          description="A horizontal chain of nine separate tools required to produce one Etsy listing, with friction tags for subscriptions, handoffs, and duplicated work."
          takeaways={act1.takeaways}
        >
          <FrictionChain stages={act1.stages} frictions={act1.frictions} />
        </DiagramShell>

        <dl className="estimate-rail" aria-label="Personal estimates">
          {act1.estimates.map((e) => (
            <div key={e.label}>
              <dt>{e.label}</dt>
              <dd>
                <strong>{e.value}</strong>
                <span>{e.note}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
