import { useState } from 'react'
import { ProductFigure } from '../components/ProductFigure'
import type { ProductFigureDef } from '../data/figures'

export type FactoryNode = {
  id: string
  kind: 'process' | 'artifact' | 'branch'
  name: string
  role: string
  input: string
  output: string
  actor: string
  takeaway?: string
  figure?: ProductFigureDef
}

type FactoryMapProps = {
  nodes: FactoryNode[]
}

export function FactoryMap({ nodes }: FactoryMapProps) {
  const [active, setActive] = useState(nodes[0]?.id ?? '')
  const current = nodes.find((n) => n.id === active) ?? nodes[0]

  const branches = nodes.filter((n) => n.kind === 'branch')
  const process = nodes.filter((n) => n.kind === 'process')
  const artifacts = nodes.filter((n) => n.kind === 'artifact')

  return (
    <div className="factory-sig">
      <div className="factory-sig__diagram" aria-label="Digital product factory map">
        <div className="factory-sig__concept">Concept → Intake</div>
        <div className="factory-sig__branches" role="list">
          {branches.map((b) => (
            <button
              key={b.id}
              type="button"
              role="listitem"
              className={`factory-sig__node factory-sig__node--branch${active === b.id ? ' is-active' : ''}`}
              aria-pressed={active === b.id}
              onClick={() => setActive(b.id)}
            >
              {b.name}
            </button>
          ))}
        </div>
        <div className="factory-sig__arrow" aria-hidden="true">
          ↓ human selection → master
        </div>
        <div className="factory-sig__production">
          <p className="factory-sig__band">Production</p>
          <div className="factory-sig__row" role="list">
            {process.map((p) => (
              <button
                key={p.id}
                type="button"
                role="listitem"
                className={`factory-sig__node factory-sig__node--process${active === p.id ? ' is-active' : ''}`}
                aria-pressed={active === p.id}
                onClick={() => setActive(p.id)}
              >
                {p.name}
              </button>
            ))}
          </div>
        </div>
        <div className="factory-sig__artifacts" role="list" aria-label="Artifact outputs">
          {artifacts.map((a) => (
            <button
              key={a.id}
              type="button"
              role="listitem"
              className={`factory-sig__node factory-sig__node--artifact${active === a.id ? ' is-active' : ''}`}
              aria-pressed={active === a.id}
              onClick={() => setActive(a.id)}
            >
              {a.name}
            </button>
          ))}
        </div>
        <div className="factory-sig__arrow" aria-hidden="true">
          ↓ Etsy draft → human review → manual publish
        </div>
      </div>

      <aside className="factory-sig__panel" aria-live="polite">
        <p className="factory-sig__panel-k">{current?.kind}</p>
        <h4>{current?.name}</h4>
        <p>{current?.role}</p>
        <dl>
          <div>
            <dt>Actor</dt>
            <dd>{current?.actor}</dd>
          </div>
          <div>
            <dt>Input</dt>
            <dd>{current?.input}</dd>
          </div>
          <div>
            <dt>Output</dt>
            <dd>{current?.output}</dd>
          </div>
        </dl>
        <p className="factory-sig__takeaway">{current?.takeaway}</p>
        {current?.figure ? (
          <ProductFigure figure={current.figure} variant="panel" showCaptureMeta={false} />
        ) : null}
      </aside>
    </div>
  )
}
