type DecisionPathProps = {
  steps: string[]
}

export function DecisionPath({ steps }: DecisionPathProps) {
  return (
    <ol className="decision-path" aria-label="Migration path">
      {steps.map((step, i) => (
        <li key={step}>
          <span>{step}</span>
          {i < steps.length - 1 ? <i aria-hidden="true">→</i> : null}
        </li>
      ))}
    </ol>
  )
}
