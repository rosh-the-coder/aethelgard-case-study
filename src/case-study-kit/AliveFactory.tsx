import { useEffect, useMemo, useState } from 'react'
import type { FactoryStation } from './types'

type AliveFactoryProps = {
  title?: string
  stations: FactoryStation[]
  spine?: string[]
  autoPlayMs?: number
}

/** Animated factory — stations feel alive; click or auto-advance. */
export function AliveFactory({
  title = 'Digital product factory',
  stations,
  spine,
  autoPlayMs = 3200,
}: AliveFactoryProps) {
  const processes = useMemo(
    () => stations.filter((s) => s.kind === 'process' || s.kind === 'gate'),
    [stations],
  )
  const [active, setActive] = useState(processes[0]?.id ?? stations[0]?.id ?? '')
  const [paused, setPaused] = useState(false)
  const current = stations.find((s) => s.id === active) ?? stations[0]
  const idx = Math.max(0, processes.findIndex((s) => s.id === active))

  useEffect(() => {
    if (paused || processes.length < 2) return
    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    const t = window.setInterval(() => {
      setActive((prev) => {
        const i = processes.findIndex((s) => s.id === prev)
        const next = processes[(i + 1) % processes.length]
        return next?.id ?? prev
      })
    }, autoPlayMs)
    return () => window.clearInterval(t)
  }, [paused, processes, autoPlayMs])

  return (
    <div
      className="csk-alive wow"
      aria-label={title}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {spine && spine.length > 0 ? (
        <ol className="csk-alive__spine" aria-label="Factory spine">
          {spine.map((n, i) => (
            <li key={n} className={i <= idx ? 'is-lit' : undefined}>
              {n}
            </li>
          ))}
        </ol>
      ) : null}

      <div className="csk-alive__rail" role="list">
        {processes.map((s, i) => (
          <button
            key={s.id}
            type="button"
            role="listitem"
            className={`csk-alive__node csk-alive__node--${s.kind}${active === s.id ? ' is-active' : ''}${i < idx ? ' is-done' : ''}`}
            aria-pressed={active === s.id}
            onClick={() => {
              setActive(s.id)
              setPaused(true)
            }}
          >
            <span className="csk-alive__n">{String(i + 1).padStart(2, '0')}</span>
            <strong>{s.name}</strong>
            <em>{s.output}</em>
          </button>
        ))}
      </div>

      <div className="csk-alive__stage" aria-live="polite">
        <div className="csk-alive__flow" aria-hidden="true">
          <span>Input</span>
          <b>{current?.input}</b>
          <i>→</i>
          <span>Process</span>
          <b>{current?.process}</b>
          <i>→</i>
          <span>Output</span>
          <b>{current?.output}</b>
          <i>→</i>
          <span>Artifact</span>
          <b>{current?.artifact}</b>
        </div>

        <div className="csk-alive__detail">
          <p className="csk-alive__kind">{current?.kind}</p>
          <h3>{current?.name}</h3>
          <p className="csk-alive__take">{current?.takeaway}</p>
          {current?.technicalNote ? <p className="csk-alive__tech">{current.technicalNote}</p> : null}
          {current?.figureSrc ? (
            <img src={current.figureSrc} alt={current.figureAlt ?? ''} loading="lazy" />
          ) : current?.figurePlaceholder ? (
            <div className="csk-figure__slot csk-figure__slot--panel">
              <strong>{current.figurePlaceholder.title}</strong>
              <code>{current.figurePlaceholder.filename}</code>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}
