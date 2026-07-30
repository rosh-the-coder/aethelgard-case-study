type FrictionChainProps = {
  stages: string[]
  frictions: string[]
}

export function FrictionChain({ stages, frictions }: FrictionChainProps) {
  return (
    <div className="friction">
      <div className="friction__scroll" tabIndex={0} role="list" aria-label="Fragmented toolchain stages">
        {stages.map((stage, i) => (
          <div className="friction__node" role="listitem" key={stage}>
            <span className="friction__index">{String(i + 1).padStart(2, '0')}</span>
            <span className="friction__label">{stage}</span>
            {i < stages.length - 1 ? (
              <span className="friction__gap" aria-hidden="true">
                ✕
              </span>
            ) : null}
          </div>
        ))}
      </div>
      <ul className="friction__tags" aria-label="Friction points">
        {frictions.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
    </div>
  )
}
