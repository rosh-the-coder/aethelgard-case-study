import { TechDeepDive } from '../case-study-kit'
import { DecisionPath } from '../diagrams/DecisionPath'
import { DiagramShell } from '../diagrams/DiagramShell'
import { act6 } from '../data/content'

export function Act6Contracts() {
  const { etsy } = act6

  return (
    <section className="section" id="act-6" aria-labelledby="act6-title">
      <div className="container">
        <p className="eyebrow">{act6.eyebrow}</p>
        <h2 className="section-title" id="act6-title">
          {act6.title}
        </h2>
        <p className="lead lead--short">{act6.intro}</p>

        <ul className="contract-list">
          {act6.contracts.map((c) => (
            <li key={c.title}>
              <strong>{c.title}</strong>
              <span>{c.body}</span>
            </li>
          ))}
        </ul>

        <DiagramShell
          id="etsy-path"
          question="What happens when UI automation fails?"
          title={etsy.title}
          description="Migration path from browser automation through bot detection and developer access to Open API v3 drafts."
          takeaways={act6.takeaways}
          className="diagram--spaced"
        >
          <DecisionPath steps={etsy.path} />
        </DiagramShell>

        <TechDeepDive title="OAuth, uploads, and disk evidence">
          {etsy.tech.map((item) => (
            <p key={item.title}>
              <strong>{item.title}.</strong> {item.body}
            </p>
          ))}
        </TechDeepDive>
      </div>
    </section>
  )
}
