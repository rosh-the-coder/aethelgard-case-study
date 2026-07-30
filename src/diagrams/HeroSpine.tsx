type HeroSpineProps = {
  steps: string[]
}

export function HeroSpine({ steps }: HeroSpineProps) {
  return (
    <ol className="hero-spine" aria-label="Product spine">
      {steps.map((step, i) => (
        <li key={step}>
          <span>{step}</span>
          {i < steps.length - 1 ? <i aria-hidden="true">→</i> : null}
        </li>
      ))}
    </ol>
  )
}
