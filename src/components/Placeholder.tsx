type PlaceholderProps = {
  label: string
  note: string
  ratio?: string
}

export function Placeholder({ label, note, ratio = '16 / 10' }: PlaceholderProps) {
  return (
    <div className="placeholder" style={{ aspectRatio: ratio }} role="img" aria-label={label}>
      <div>
        <strong>{label}</strong>
        <span>{note}</span>
      </div>
    </div>
  )
}
