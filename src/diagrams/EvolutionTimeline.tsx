type EvolutionItem = {
  id: string
  label: string
  detail: string
  source: string
}

type EvolutionTimelineProps = {
  items: EvolutionItem[]
}

export function EvolutionTimeline({ items }: EvolutionTimelineProps) {
  return (
    <ol className="evolution" aria-label="Product evolution stages">
      {items.map((item, i) => (
        <li key={item.id} className="evolution__item">
          <span className="evolution__n">{String(i + 1).padStart(2, '0')}</span>
          <div>
            <p className="evolution__label">{item.label}</p>
            <p className="evolution__detail">{item.detail}</p>
            <p className="evolution__source">{item.source}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}
