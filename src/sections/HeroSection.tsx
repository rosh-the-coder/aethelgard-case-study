import {
  CaseStudyHero,
  ProductTour,
  SummaryStrip as KitSummaryStrip,
} from '../case-study-kit'
import type { ProductTourStep } from '../case-study-kit'
import { assets } from '../data/assets'
import { hero, meta, summary } from '../data/content'
import { productTour as tourData, type ProductFigureDef } from '../data/figures'

const pipeline = [
  'Concept',
  'Artwork',
  'Print',
  'Mockups',
  'SEO',
  'Etsy Draft',
  'Human Review',
]

function toTourStep(step: {
  id: string
  title: string
  blurb: string
  figure: ProductFigureDef
}): ProductTourStep {
  const fig = step.figure
  const annotations = fig.annotations?.map((a) => ({
    n: a.n,
    label: a.label,
    note: a.label,
  }))

  return {
    id: step.id,
    title: step.title,
    sentence: step.blurb,
    caption: fig.description,
    callout:
      annotations && annotations.length > 0
        ? annotations.map((a) => `${a.n} ${a.label}`).join(' · ')
        : 'Drop the capture into the stable filename slot.',
    figure: {
      number: fig.number,
      title: fig.title,
      description: fig.description,
      filename: fig.filename,
      alt: fig.alt,
      src: fig.src,
      status: fig.status === 'real' ? 'real' : 'placeholder',
      dimensions: fig.dimensions,
      annotations,
    },
  }
}

const tourSteps: ProductTourStep[] = tourData.map((s) => toTourStep(s))

export function HeroSection() {
  return (
    <CaseStudyHero
      name={hero.name}
      productLabel="Digital Product Factory"
      pipeline={pipeline}
      mediaSrc={assets.hero.src}
      mediaAlt={assets.hero.alt}
      storyLine={meta.centralStory}
    />
  )
}

export function SummaryStrip() {
  return <KitSummaryStrip items={[...summary.items]} />
}

export function ProductTourSection() {
  return <ProductTour title="This is what I built." steps={tourSteps} />
}
