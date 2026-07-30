import type { ProcessTimelineItem } from './types'

type ProcessTimelineProps = {
  items: ProcessTimelineItem[]
  ariaLabel?: string
}

export function ProcessTimeline({ items, ariaLabel = 'Process timeline' }: ProcessTimelineProps) {
  return (
    <ol className="csk-process wow" aria-label={ariaLabel}>
      {items.map((item, i) => (
        <li key={item.id} className={`csk-process__step csk-process__step--${item.kind ?? 'diagram'}`}>
          <span className="csk-process__n">{String(i + 1).padStart(2, '0')}</span>
          <strong>{item.label}</strong>
          <div className="csk-process__visual">{item.visual}</div>
          <p>{item.detail}</p>
          {item.note ? <span className="csk-process__note">{item.note}</span> : null}
        </li>
      ))}
    </ol>
  )
}
