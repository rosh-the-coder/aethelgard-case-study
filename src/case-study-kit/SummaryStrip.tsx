type SummaryStripProps = {
  items: { label: string; value: string }[]
}

export function SummaryStrip({ items }: SummaryStripProps) {
  return (
    <section className="csk-summary" aria-label="Project summary">
      <dl className="csk-summary__grid">
        {items.map((item) => (
          <div key={item.label}>
            <dt>{item.label}</dt>
            <dd>{item.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
