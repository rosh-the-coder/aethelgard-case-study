import { useState } from 'react'
import type { FactoryStation } from './types'

export type SignatureNodeKind = 'process' | 'artifact' | 'decision' | 'human' | 'api'

export type SignatureNode = {
  id: string
  name: string
  kind: SignatureNodeKind
  input: string
  output: string
  actor: string
  takeaway: string
  process?: string
  artifact?: string
  figureSrc?: string
  figureAlt?: string
  figurePlaceholder?: { title: string; filename: string }
  /** Optional layout column hint for the spatial map */
  col?: number
  row?: number
}

type SignatureFactoryProps = {
  title?: string
  nodes?: SignatureNode[]
  /** Fallback: adapt kit FactoryStation list */
  stations?: FactoryStation[]
}

const defaultNodes: SignatureNode[] = [
  {
    id: 'concept',
    name: 'Concept',
    kind: 'human',
    input: 'Market angle',
    output: 'Product brief',
    actor: 'Operator',
    takeaway: 'Opportunity first — before any generation starts.',
    col: 1,
    row: 2,
  },
  {
    id: 'intake-ai',
    name: 'AI intake',
    kind: 'process',
    input: 'Brief + prompt',
    output: 'Generated candidates',
    actor: 'Providers + code',
    takeaway: 'Multi-provider dispatch behind one acquisition surface.',
    col: 2,
    row: 1,
  },
  {
    id: 'intake-pd',
    name: 'PD intake',
    kind: 'process',
    input: 'Museum / Wikimedia query',
    output: 'Imported artwork',
    actor: 'API + code',
    takeaway: 'Native proportions preserved for public-domain packs.',
    col: 2,
    row: 2,
  },
  {
    id: 'intake-poster',
    name: 'Poster intake',
    kind: 'process',
    input: 'Visual + type brief',
    output: 'Typed poster base',
    actor: 'Model + code',
    takeaway: 'Model for image. Code for exact typography.',
    col: 2,
    row: 3,
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
    col: 3,
    row: 2,
  },
  {
    id: 'select',
    name: 'Human selection',
    kind: 'decision',
    input: 'Candidate set',
    output: 'Selected artwork',
    actor: 'Operator',
    takeaway: 'Models propose. Operators decide.',
    col: 4,
    row: 2,
  },
  {
    id: 'master',
    name: 'Master',
    kind: 'artifact',
    input: 'Winner',
    output: 'Master image',
    actor: 'Code',
    takeaway: 'One source of truth for every crop and mockup.',
    artifact: 'master.png',
    col: 5,
    row: 2,
  },
  {
    id: 'print',
    name: 'Print',
    kind: 'process',
    input: 'Master',
    output: 'Print pack',
    actor: 'Code',
    takeaway: 'Exact 300 DPI sizes — no invented detail per crop.',
    artifact: 'prints/',
    col: 6,
    row: 1,
  },
  {
    id: 'mockups',
    name: 'Mockups',
    kind: 'process',
    input: 'Master + templates',
    output: 'Mockup set',
    actor: 'Code',
    takeaway: 'Perspective, light, and glare as a factory station.',
    artifact: 'mockup_*.jpg',
    col: 6,
    row: 2,
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
    col: 6,
    row: 3,
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
    col: 7,
    row: 2,
  },
  {
    id: 'draft',
    name: 'Etsy draft',
    kind: 'api',
    input: 'Package + OAuth',
    output: 'Draft listing',
    actor: 'Etsy Open API v3',
    takeaway: 'Draft only — publish stays human.',
    artifact: 'upload_status.json',
    col: 8,
    row: 2,
  },
  {
    id: 'review',
    name: 'Human review',
    kind: 'human',
    input: 'Draft listing',
    output: 'Publish decision',
    actor: 'Operator',
    takeaway: 'The factory stops where irreversible choices begin.',
    col: 9,
    row: 2,
  },
  {
    id: 'publish',
    name: 'Manual publish',
    kind: 'decision',
    input: 'Approved draft',
    output: 'Live listing',
    actor: 'Operator (outside tool)',
    takeaway: 'Irreversible publication remains outside automation.',
    col: 10,
    row: 2,
  },
]

function stationsToNodes(stations: FactoryStation[]): SignatureNode[] {
  return stations.map((s, i) => ({
    id: s.id,
    name: s.name,
    kind:
      s.kind === 'gate'
        ? 'decision'
        : s.kind === 'artifact'
          ? 'artifact'
          : ('process' as SignatureNodeKind),
    input: s.input,
    output: s.output,
    actor: s.kind === 'gate' ? 'Operator' : 'System',
    takeaway: s.takeaway,
    process: s.process,
    artifact: s.artifact,
    figureSrc: s.figureSrc,
    figureAlt: s.figureAlt,
    figurePlaceholder: s.figurePlaceholder,
    col: i + 1,
    row: 2,
  }))
}

/** Connected spatial factory map — click a station for detail. */
export function SignatureFactory({
  title = 'The digital factory',
  nodes,
  stations,
}: SignatureFactoryProps) {
  const map = nodes ?? (stations ? stationsToNodes(stations) : defaultNodes)
  const [active, setActive] = useState(map[0]?.id ?? '')
  const current = map.find((n) => n.id === active) ?? map[0]

  return (
    <div className="csk-sig wow" aria-label={title}>
      <div className="csk-sig__layout">
        <div className="csk-sig__map">
          <p className="csk-sig__map-label">Spatial production map</p>
          <div className="csk-sig__lanes" role="list">
            <div className="csk-sig__phase">
              <span className="csk-sig__phase-label">Brief</span>
              {renderNodes(map, ['concept'], active, setActive)}
            </div>
            <span className="csk-sig__arrow" aria-hidden="true" />
            <div className="csk-sig__phase csk-sig__phase--stack">
              <span className="csk-sig__phase-label">Intake</span>
              {renderNodes(map, ['intake-ai', 'intake-pd', 'intake-poster'], active, setActive)}
            </div>
            <span className="csk-sig__arrow" aria-hidden="true" />
            <div className="csk-sig__phase">
              <span className="csk-sig__phase-label">Select</span>
              {renderNodes(map, ['candidates', 'select', 'master'], active, setActive)}
            </div>
            <span className="csk-sig__arrow" aria-hidden="true" />
            <div className="csk-sig__phase csk-sig__phase--stack">
              <span className="csk-sig__phase-label">Production</span>
              {renderNodes(map, ['print', 'mockups', 'seo'], active, setActive)}
            </div>
            <span className="csk-sig__arrow" aria-hidden="true" />
            <div className="csk-sig__phase">
              <span className="csk-sig__phase-label">Ship</span>
              {renderNodes(map, ['package', 'draft', 'review', 'publish'], active, setActive)}
            </div>
          </div>

          <ul className="csk-sig__legend" aria-label="Node types">
            <li>
              <i className="csk-sig__swatch csk-sig__swatch--process" /> Process
            </li>
            <li>
              <i className="csk-sig__swatch csk-sig__swatch--artifact" /> Artifact
            </li>
            <li>
              <i className="csk-sig__swatch csk-sig__swatch--decision" /> Decision
            </li>
            <li>
              <i className="csk-sig__swatch csk-sig__swatch--human" /> Human
            </li>
            <li>
              <i className="csk-sig__swatch csk-sig__swatch--api" /> External API
            </li>
          </ul>
        </div>

        <aside className="csk-sig__panel" aria-live="polite">
          <p className={`csk-sig__kind csk-sig__kind--${current?.kind}`}>{current?.kind}</p>
          <h3>{current?.name}</h3>
          <dl>
            <div>
              <dt>Input</dt>
              <dd>{current?.input}</dd>
            </div>
            <div>
              <dt>Output</dt>
              <dd>{current?.output}</dd>
            </div>
            <div>
              <dt>Actor</dt>
              <dd>{current?.actor}</dd>
            </div>
            {current?.artifact ? (
              <div>
                <dt>Artifact</dt>
                <dd>
                  <code>{current.artifact}</code>
                </dd>
              </div>
            ) : null}
          </dl>
          <p className="csk-sig__take">{current?.takeaway}</p>
          {current?.figureSrc ? (
            <img src={current.figureSrc} alt={current.figureAlt ?? ''} loading="lazy" />
          ) : current?.figurePlaceholder ? (
            <div className="csk-figure__slot csk-figure__slot--panel">
              <strong>{current.figurePlaceholder.title}</strong>
              <code>{current.figurePlaceholder.filename}</code>
            </div>
          ) : (
            <div className="csk-figure__slot csk-figure__slot--panel">
              <strong>{current?.name}</strong>
              <span>Station detail</span>
            </div>
          )}
        </aside>
      </div>
    </div>
  )
}

function renderNodes(
  map: SignatureNode[],
  ids: string[],
  active: string,
  setActive: (id: string) => void,
) {
  return ids.map((id) => {
    const n = map.find((x) => x.id === id)
    if (!n) return null
    return (
      <button
        key={n.id}
        type="button"
        role="listitem"
        className={`csk-sig__node csk-sig__node--${n.kind}${active === n.id ? ' is-active' : ''}`}
        aria-pressed={active === n.id}
        onClick={() => setActive(n.id)}
      >
        <strong>{n.name}</strong>
        <span>{n.output}</span>
      </button>
    )
  })
}
