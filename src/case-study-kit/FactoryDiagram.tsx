import { useState } from 'react'
import type { FactoryStation } from './types'

type FactoryDiagramProps = {
  title?: string
  stations: FactoryStation[]
  spine?: string[]
}

export function FactoryDiagram({ title = 'Digital factory', stations, spine }: FactoryDiagramProps) {
  const [active, setActive] = useState(stations[0]?.id ?? '')
  const current = stations.find((s) => s.id === active) ?? stations[0]
  const processes = stations.filter((s) => s.kind === 'process' || s.kind === 'gate')
  const artifacts = stations.filter((s) => s.kind === 'artifact')

  return (
    <div className="csk-factory wow" aria-label={title}>
      <div className="csk-factory__map">
        {spine && spine.length > 0 ? (
          <ol className="csk-factory__spine">
            {spine.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ol>
        ) : null}

        <div className="csk-factory__lane" role="list" aria-label="Process stations">
          {processes.map((s) => (
            <button
              key={s.id}
              type="button"
              role="listitem"
              className={`csk-factory__node csk-factory__node--${s.kind}${active === s.id ? ' is-active' : ''}`}
              aria-pressed={active === s.id}
              onClick={() => setActive(s.id)}
            >
              <strong>{s.name}</strong>
              <span>{s.output}</span>
            </button>
          ))}
        </div>

        <p className="csk-factory__label">Artifacts</p>
        <div className="csk-factory__arts" role="list" aria-label="Artifacts">
          {artifacts.map((s) => (
            <button
              key={s.id}
              type="button"
              role="listitem"
              className={`csk-factory__node csk-factory__node--artifact${active === s.id ? ' is-active' : ''}`}
              aria-pressed={active === s.id}
              onClick={() => setActive(s.id)}
            >
              {s.name}
            </button>
          ))}
        </div>
      </div>

      <aside className="csk-factory__panel" aria-live="polite">
        <p className="csk-factory__k">{current?.kind}</p>
        <h3>{current?.name}</h3>
        <dl>
          <div>
            <dt>Input</dt>
            <dd>{current?.input}</dd>
          </div>
          <div>
            <dt>Process</dt>
            <dd>{current?.process}</dd>
          </div>
          <div>
            <dt>Output</dt>
            <dd>{current?.output}</dd>
          </div>
          <div>
            <dt>Artifact</dt>
            <dd>{current?.artifact}</dd>
          </div>
        </dl>
        <p className="csk-factory__take">{current?.takeaway}</p>
        {current?.technicalNote ? <p className="csk-factory__tech">{current.technicalNote}</p> : null}
        {current?.figureSrc ? (
          <img src={current.figureSrc} alt={current.figureAlt ?? ''} loading="lazy" />
        ) : current?.figurePlaceholder ? (
          <div className="csk-figure__slot csk-figure__slot--panel">
            <strong>{current.figurePlaceholder.title}</strong>
            <code>{current.figurePlaceholder.filename}</code>
          </div>
        ) : null}
      </aside>
    </div>
  )
}
