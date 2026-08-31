import { BlueprintSection, SignatureFactory, SystemMorph } from '../case-study-kit'
import type { SignatureNode } from '../case-study-kit'
import { act2, act3 } from '../data/content'
import { figures } from '../data/figures'

const nodes: SignatureNode[] = [
  {
    id: 'concept',
    name: 'Concept',
    kind: 'human',
    input: 'Market angle',
    output: 'Product brief',
    actor: 'Operator',
    takeaway: 'Validate the opportunity before anything is generated.',
    figurePlaceholder: { title: 'Research', filename: figures.research.filename },
  },
  {
    id: 'intake-ai',
    name: 'AI intake',
    kind: 'process',
    input: 'Brief + prompt',
    output: 'Generated candidates',
    actor: 'Providers + code',
    takeaway: 'Multi-provider dispatch behind one acquisition surface.',
    figurePlaceholder: { title: 'Generation', filename: figures.generation.filename },
  },
  {
    id: 'intake-pd',
    name: 'PD intake',
    kind: 'process',
    input: 'Museum / Wikimedia query',
    output: 'Imported artwork',
    actor: 'API + code',
    takeaway: 'Native proportions preserved for public-domain packs.',
    figurePlaceholder: { title: 'Public-domain mode', filename: figures.modePd.filename },
  },
  {
    id: 'intake-poster',
    name: 'Poster intake',
    kind: 'process',
    input: 'Visual + type brief',
    output: 'Typed poster base',
    actor: 'Model + code',
    takeaway: 'Model for image. Code for exact typography.',
    figurePlaceholder: { title: 'Poster mode', filename: figures.modePoster.filename },
  },
  {
    id: 'candidates',
    name: 'Candidate set',
    kind: 'artifact',
    input: 'Valid frames',
    output: 'Comparable set',
    actor: 'Filesystem',
    takeaway: 'Nothing is a master until a human chooses.',
    artifact: 'candidates/',
    figurePlaceholder: { title: 'Candidates', filename: figures.generation.filename },
  },
  {
    id: 'select',
    name: 'Human selection',
    kind: 'decision',
    input: 'Candidate set',
    output: 'Selected artwork',
    actor: 'Operator',
    takeaway: 'Models never auto-promote.',
    figurePlaceholder: { title: 'Winner selection', filename: figures.winner.filename },
  },
  {
    id: 'master',
    name: 'Master',
    kind: 'artifact',
    input: 'Winner',
    output: 'Master image',
    actor: 'Code',
    takeaway: 'One source of truth for every crop.',
    artifact: 'master.png',
  },
  {
    id: 'print',
    name: 'Print',
    kind: 'process',
    input: 'Master',
    output: 'Print pack',
    actor: 'Code',
    takeaway: 'Exact sizes. No invented detail per crop.',
    artifact: 'prints/',
    figurePlaceholder: { title: 'Print output', filename: figures.printOutput.filename },
  },
  {
    id: 'mockups',
    name: 'Mockups',
    kind: 'process',
    input: 'Master + templates',
    output: 'Mockup set',
    actor: 'Code',
    takeaway: 'One station — not the whole product.',
    artifact: 'mockup_*.jpg',
    figureSrc: './assets/hero-owl-mockup.jpg',
    figureAlt: 'Composited lifestyle mockup',
  },
  {
    id: 'seo',
    name: 'SEO',
    kind: 'process',
    input: 'Product context',
    output: 'Listing metadata',
    actor: 'Mixed',
    takeaway: 'Marketplace limits enforced before upload.',
    artifact: 'listing.json',
    figurePlaceholder: { title: 'SEO editor', filename: figures.seo.filename },
  },
  {
    id: 'package',
    name: 'Delivery package',
    kind: 'artifact',
    input: 'Prints + copy',
    output: 'Delivery PDF',
    actor: 'Code',
    takeaway: 'Buyer-facing package assembled beside the product folder.',
    artifact: 'Download_Links.pdf',
    figurePlaceholder: { title: 'Delivery PDF', filename: figures.deliveryPdf.filename },
  },
  {
    id: 'draft',
    name: 'Etsy draft',
    kind: 'api',
    input: 'Package + OAuth',
    output: 'Draft listing',
    actor: 'Etsy Open API v3',
    takeaway: 'Draft only. Publish stays human.',
    artifact: 'upload_status.json',
    figurePlaceholder: { title: 'Etsy draft', filename: figures.etsyDraft.filename },
  },
  {
    id: 'review',
    name: 'Human review',
    kind: 'human',
    input: 'Draft listing',
    output: 'Publish decision',
    actor: 'Operator',
    takeaway: 'The factory stops where irreversible choices begin.',
  },
  {
    id: 'publish',
    name: 'Manual publish',
    kind: 'decision',
    input: 'Approved draft',
    output: 'Live listing',
    actor: 'Operator (outside tool)',
    takeaway: 'Irreversible publication remains outside automation.',
  },
]

/** Transformation into one digital factory — morph + signature map once. */
export function Act2Factory() {
  return (
    <section className="section section--flush" id="act-2" aria-labelledby="act2-title">
      <div className="container" style={{ paddingBottom: '1.5rem' }}>
        <p className="eyebrow">{act2.eyebrow}</p>
        <h2 className="section-title" id="act2-title">
          From nine tools to one production system.
        </h2>
        <p className="lead lead--short">{act2.statement}</p>

        <SystemMorph
          title="The transformation"
          beforeTitle="Before Aethelgard"
          afterTitle="After Aethelgard"
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
          notes={[
            { label: 'Chaos', text: 'Many exports. Many subscriptions. Many handoffs.' },
            { label: 'Factory', text: 'One guided production system with shared artifacts.' },
            { label: 'Control', text: 'Publication remains human-controlled.' },
          ]}
        />
      </div>

      <BlueprintSection title="Build products, not files." eyebrow="The digital factory">
        <p className="csk-alive-lead">{act3.intro}</p>
        <SignatureFactory title="The digital factory" nodes={nodes} />
      </BlueprintSection>
    </section>
  )
}
