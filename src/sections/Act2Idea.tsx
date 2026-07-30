import { ReflectionQuote, WorkflowComparison } from '../case-study-kit'
import { act2 } from '../data/content'

export function Act2Idea() {
  return (
    <section className="section section--flush" id="act-2" aria-labelledby="act2-title">
      <ReflectionQuote>{act2.statement}</ReflectionQuote>
      <div className="container" style={{ paddingBottom: '4.5rem' }}>
        <p className="eyebrow">{act2.eyebrow}</p>
        <h2 className="visually-hidden" id="act2-title">
          Workflow transformation
        </h2>
        <WorkflowComparison
          beforeTitle="Before"
          afterTitle="Aethelgard"
          beforeSteps={[
            { label: 'Research', friction: 'copy' },
            { label: 'Generate', friction: 'download' },
            { label: 'Photoshop', friction: 'export' },
            { label: 'Upscaler', friction: 'rename' },
            { label: 'Mockups', friction: 'export' },
            { label: 'SEO', friction: 'copy' },
            { label: 'Packaging', friction: 'upload' },
            { label: 'Seller Manager', friction: 'manual entry' },
          ]}
          afterSteps={[
            'Research',
            'Acquire',
            'Select',
            'Master',
            'Print',
            'Mockups',
            'SEO',
            'Package',
            'Etsy draft',
            'Human review',
          ]}
          notes={[
            { label: 'Before', text: 'Repeated handoffs and disconnected files.' },
            { label: 'After', text: 'One coordinated production workflow.' },
            { label: 'Control', text: 'Publication remains human-controlled.' },
          ]}
        />
      </div>
    </section>
  )
}
