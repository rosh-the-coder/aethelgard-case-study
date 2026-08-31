import type { ReactNode } from 'react'
import { ProductTour } from '../case-study-kit'
import type { ProductTourStep } from '../case-study-kit'
import { productTour as tourData } from '../data/figures'
import type { ProductFigureDef } from '../data/figures'

const purposes: Record<string, { purpose: string; result: string; sentence: string }> = {
  dashboard: {
    purpose: 'See what needs attention across the factory.',
    result: 'Review queue, failed jobs, drafts, and active production in one place.',
    sentence: 'V2 operational overview of the production modules.',
  },
  research: {
    purpose: 'Validate the niche before generation.',
    result: 'A concept ready for acquisition.',
    sentence: 'Opportunity first. Artwork second.',
  },
  generation: {
    purpose: 'Create candidates and choose the winner.',
    result: 'A human-approved artwork reference — not an auto-promoted master.',
    sentence: 'Artwork Studio: generate, import, select, prepare.',
  },
  print: {
    purpose: 'Derive exact print sizes from one master.',
    result: 'A 300 DPI print pack ready for packaging.',
    sentence: 'One master. Exact sizes.',
  },
  mockups: {
    purpose: 'Compose lifestyle imagery from one master.',
    result: 'Perspective-aware mockup set.',
    sentence: 'Commerce imagery as a factory station.',
  },
  seo: {
    purpose: 'Write listing copy and assemble delivery assets.',
    result: 'Constrained metadata and packaging ready to attach.',
    sentence: 'Rules enforced before upload.',
  },
  draft: {
    purpose: 'Create a reviewable Etsy draft via Open API.',
    result: 'Draft listing evidence on disk — publish stays human.',
    sentence: 'The factory ends at human review.',
  },
}

function toStep(step: {
  id: string
  title: string
  blurb: string
  figure: ProductFigureDef
}): ProductTourStep {
  const extra = purposes[step.id]
  const fig = step.figure
  return {
    id: step.id,
    title: step.title,
    sentence: extra?.sentence ?? step.blurb,
    caption: fig.description,
    callout:
      fig.annotations?.map((a) => `${a.n} ${a.label}`).join(' · ') ??
      'Drop the capture into public/assets/screens/.',
    purpose: extra?.purpose,
    result: extra?.result,
    figure: {
      number: fig.number,
      title: fig.title,
      description: fig.description,
      filename: fig.filename,
      alt: fig.alt,
      src: fig.src,
      status: fig.status === 'real' ? 'real' : 'placeholder',
      dimensions: fig.dimensions,
      annotations: fig.annotations?.map((a) => ({ n: a.n, label: a.label, note: a.label })),
    },
  }
}

/** The software — one screen at a time. */
export function Act3Software() {
  const steps = tourData.map((s) => toStep(s))
  return (
    <Act3Shell>
      <ProductTour
        eyebrow="The software"
        title="This is what I built."
        layout="software"
        steps={steps}
      />
    </Act3Shell>
  )
}

function Act3Shell({ children }: { children: ReactNode }) {
  return (
    <div id="act-3" className="section--flush">
      {children}
    </div>
  )
}
