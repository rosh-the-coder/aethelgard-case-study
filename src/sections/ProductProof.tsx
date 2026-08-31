import { AnnotatedFigure } from '../case-study-kit'
import { figures } from '../data/figures'

/** Early product proof — Factory Dashboard (V2 overview). */
export function ProductProof() {
  const fig = figures.dashboard
  return (
    <section className="section section--proof" id="product-proof" aria-labelledby="proof-title">
      <div className="container">
        <p className="eyebrow">The product at a glance</p>
        <h2 className="section-title" id="proof-title">
          Factory Dashboard
        </h2>
        <p className="lead lead--short">
          The V2 Factory Dashboard unified the existing production modules into one operational
          overview.
        </p>
        <p className="proof-note">V2 addition — not part of the original sparse Git history.</p>

        <AnnotatedFigure
          number={fig.number}
          title={fig.title}
          caption="Attention first: review queue, failed jobs, drafts, and active production — then pipeline, recent work, and system status."
          notice="Drop a real capture as factory-dashboard.webp or dashboard-overview.webp."
          alt={fig.alt}
          filename={fig.filename}
          dimensions={fig.dimensions}
          status="placeholder"
          size="hero"
          annotations={[
            { n: 1, label: 'Attention summary', note: 'What needs action now' },
            { n: 2, label: 'Review queue', note: 'Items waiting on human judgment' },
            { n: 3, label: 'Active production', note: 'Products currently in the factory' },
            { n: 4, label: 'Production pipeline', note: 'Stages from concept through draft' },
            { n: 5, label: 'Recent work', note: 'Products and activity' },
            { n: 6, label: 'Quick actions', note: 'Start or continue a production run' },
          ]}
        />
      </div>
    </section>
  )
}
