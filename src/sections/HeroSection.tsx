import { CaseStudyHero, SummaryStrip as KitSummaryStrip } from '../case-study-kit'
import { assets } from '../data/assets'
import { hero, meta, summary } from '../data/content'

const pipeline = [
  'Concept',
  'Artwork',
  'Print',
  'Mockups',
  'SEO',
  'Etsy Draft',
  'Human Review',
]

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
