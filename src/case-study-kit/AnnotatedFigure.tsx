import { useId, useState } from 'react'
import type { AnnotatedFigureProps } from './types'

export function AnnotatedFigure({
  number,
  title,
  caption,
  notice,
  src,
  alt,
  filename,
  dimensions,
  status = 'placeholder',
  annotations = [],
  size = 'large',
}: AnnotatedFigureProps) {
  const [open, setOpen] = useState<number | null>(null)
  const id = useId()

  return (
    <figure className={`csk-figure csk-figure--${size}`}>
      <div className="csk-figure__stage">
        {src && status === 'real' ? (
          <img src={src} alt={alt} loading="lazy" decoding="async" />
        ) : (
          <div className="csk-figure__slot" role="img" aria-label={alt}>
            <strong>{title}</strong>
            {filename ? <code>{filename}</code> : null}
            {dimensions ? <span>{dimensions}</span> : null}
          </div>
        )}

        {annotations.length > 0 ? (
          <div className="csk-figure__hots" aria-label="Annotations">
            {annotations.map((a, i) => {
              const top = 18 + (i % 4) * 18
              const left = 12 + Math.floor(i / 4) * 38
              const isOpen = open === a.n
              return (
                <button
                  key={a.n}
                  type="button"
                  className={`csk-hot${isOpen ? ' is-open' : ''}`}
                  style={{ top: `${top}%`, left: `${left}%` }}
                  aria-expanded={isOpen}
                  aria-controls={`${id}-note-${a.n}`}
                  onClick={() => setOpen(isOpen ? null : a.n)}
                  onMouseEnter={() => setOpen(a.n)}
                  onMouseLeave={() => setOpen(null)}
                  onFocus={() => setOpen(a.n)}
                  onBlur={() => setOpen(null)}
                >
                  {a.n}
                  <span id={`${id}-note-${a.n}`} className="csk-hot__tip" hidden={!isOpen}>
                    {a.note ?? a.label}
                  </span>
                </button>
              )
            })}
          </div>
        ) : null}
      </div>
      <figcaption className="csk-figure__cap">
        <span className="csk-figure__num">Figure {number}</span>
        <strong>{title}</strong>
        <span className="csk-figure__text">{caption}</span>
        {notice ? <span className="csk-figure__notice">{notice}</span> : null}
      </figcaption>
    </figure>
  )
}
