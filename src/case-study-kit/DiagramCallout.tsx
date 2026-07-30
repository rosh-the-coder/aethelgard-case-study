type DiagramCalloutProps = {
  label: string
  children: string
}

export function DiagramCallout({ label, children }: DiagramCalloutProps) {
  return (
    <p className="csk-callout">
      <span>{label}</span>
      {children}
    </p>
  )
}
