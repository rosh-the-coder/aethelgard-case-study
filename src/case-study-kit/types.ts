import type { ReactNode } from 'react'

export type CaseStudyHeroProps = {
  name: string
  productLabel: string
  pipeline: string[]
  supportingLine?: string
  mediaSrc: string
  mediaAlt?: string
  storyLine?: string
  meta?: { label: string; value: string }[]
}

export type ProductTourStep = {
  id: string
  title: string
  sentence: string
  caption: string
  callout: string
  purpose?: string
  result?: string
  figure: {
    number: string
    title: string
    description: string
    filename: string
    alt: string
    src?: string
    status: 'real' | 'placeholder' | 'diagram'
    dimensions?: string
    annotations?: { n: number; label: string; note?: string }[]
  }
}

export type FactoryStation = {
  id: string
  name: string
  kind: 'process' | 'artifact' | 'gate'
  input: string
  process: string
  output: string
  artifact: string
  takeaway: string
  technicalNote?: string
  figureSrc?: string
  figureAlt?: string
  figurePlaceholder?: {
    title: string
    filename: string
  }
}

export type WorkflowComparisonProps = {
  beforeTitle?: string
  afterTitle?: string
  beforeSteps: { label: string; friction?: string }[]
  afterSteps: string[]
  beforeAside?: string
  afterAside?: string
  notes: { label: string; text: string }[]
}

export type AnnotatedFigureProps = {
  number: string
  title: string
  caption: string
  notice?: string
  src?: string
  alt: string
  filename?: string
  dimensions?: string
  status?: 'real' | 'placeholder'
  annotations?: { n: number; label: string; note?: string }[]
  size?: 'hero' | 'large' | 'inline'
}

export type EvidenceItem = {
  value: string
  label: string
}

export type ProcessTimelineItem = {
  id: string
  label: string
  detail: string
  kind?: 'real' | 'diagram'
  visual?: ReactNode
  note?: string
}
