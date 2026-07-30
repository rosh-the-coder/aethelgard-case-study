import {
  BlueprintSection,
  FactoryDiagram,
  TechDeepDive,
} from '../case-study-kit'
import type { FactoryStation } from '../case-study-kit'
import { DiagramShell } from '../diagrams/DiagramShell'
import { SystemFlow } from '../diagrams/SystemFlow'
import { act3 } from '../data/content'
import { figures } from '../data/figures'

const stations: FactoryStation[] = [
  {
    id: 'acq',
    name: 'Acquisition',
    kind: 'process',
    input: 'Concept',
    process: 'AI · public domain · poster',
    output: 'Candidate set',
    artifact: 'candidates/',
    takeaway: 'Three intakes. One downstream factory.',
    figurePlaceholder: { title: 'Generation', filename: figures.generation.filename },
  },
  {
    id: 'select',
    name: 'Selection',
    kind: 'gate',
    input: 'Valid candidates',
    process: 'Human winner choice',
    output: 'Selected artwork',
    artifact: 'winner ref',
    takeaway: 'Models never auto-promote.',
    figurePlaceholder: { title: 'Winner selection', filename: figures.winner.filename },
  },
  {
    id: 'master',
    name: 'Master',
    kind: 'process',
    input: 'Winner',
    process: 'Upscale / prepare',
    output: 'Master image',
    artifact: 'master.png',
    takeaway: 'One source of truth for every crop.',
  },
  {
    id: 'print',
    name: 'Print',
    kind: 'process',
    input: 'Master',
    process: '300 DPI matrix',
    output: 'Print pack',
    artifact: 'prints/',
    takeaway: 'Exact sizes. No invented detail per crop.',
    figurePlaceholder: { title: 'Print output', filename: figures.printOutput.filename },
  },
  {
    id: 'mock',
    name: 'Mockups',
    kind: 'process',
    input: 'Master + templates',
    process: 'Perspective · light · glare',
    output: 'Mockup set',
    artifact: 'mockup_*.jpg',
    takeaway: 'One station — not the whole product.',
    figureSrc: './assets/hero-owl-mockup.jpg',
    figureAlt: 'Composited lifestyle mockup',
  },
  {
    id: 'seo',
    name: 'SEO',
    kind: 'process',
    input: 'Product context',
    process: 'Constrained copy',
    output: 'Listing metadata',
    artifact: 'listing.json',
    takeaway: 'Marketplace limits enforced before upload.',
    figurePlaceholder: { title: 'SEO editor', filename: figures.seo.filename },
  },
  {
    id: 'pack',
    name: 'Packaging',
    kind: 'process',
    input: 'Prints + copy',
    process: 'Delivery sheet',
    output: 'Buyer package',
    artifact: 'Download_Links.pdf',
    takeaway: 'Delivery lives beside the product folder.',
  },
  {
    id: 'draft',
    name: 'Etsy draft',
    kind: 'gate',
    input: 'Package + OAuth',
    process: 'Open API v3',
    output: 'Draft listing',
    artifact: 'upload_status.json',
    takeaway: 'Draft only. Publish stays human.',
    figurePlaceholder: { title: 'Etsy draft', filename: figures.etsyDraft.filename },
  },
  {
    id: 'art-master',
    name: 'master.png',
    kind: 'artifact',
    input: 'Winner',
    process: 'Persist',
    output: 'Master file',
    artifact: 'master.png',
    takeaway: 'Inspectable on disk.',
  },
  {
    id: 'art-prints',
    name: 'print pack',
    kind: 'artifact',
    input: 'Master',
    process: 'Export sizes',
    output: 'prints/*',
    artifact: 'prints/',
    takeaway: 'Buyer-ready geometry.',
  },
  {
    id: 'art-mock',
    name: 'mockup set',
    kind: 'artifact',
    input: 'Master',
    process: 'Compose',
    output: 'mockup_*.jpg',
    artifact: 'mockups',
    takeaway: 'Commerce imagery.',
  },
  {
    id: 'art-draft',
    name: 'Etsy draft ID',
    kind: 'artifact',
    input: 'API response',
    process: 'Persist evidence',
    output: 'Listing ID',
    artifact: '4543935955',
    takeaway: 'Verified on disk.',
  },
]

export function Act3System() {
  return (
    <>
      <BlueprintSection title="What this software actually does." eyebrow="Factory blueprint">
        <FactoryDiagram
          spine={['Concept', 'Acquisition', 'Selection', 'Master', 'Production', 'Draft', 'Review']}
          stations={stations}
        />
      </BlueprintSection>

      <section className="section section--visual" id="act-3" aria-labelledby="act3-title">
        <div className="container">
          <p className="eyebrow">{act3.eyebrow}</p>
          <h2 className="section-title" id="act3-title">
            {act3.title}
          </h2>
          <p className="lead">{act3.intro}</p>

          <DiagramShell
            id="system-flow"
            question={act3.question}
            title="Interactive production map"
            description="Stations from concept to manual publish with actor, input, and output."
            takeaways={act3.takeaways}
          >
            <SystemFlow steps={act3.flow} reviewGates={act3.reviewGates} />
          </DiagramShell>

          <TechDeepDive title="Architecture trade-offs">
            <ul>
              {act3.whyFit.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <ul>
              {act3.tradeoffs.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </TechDeepDive>
        </div>
      </section>
    </>
  )
}
