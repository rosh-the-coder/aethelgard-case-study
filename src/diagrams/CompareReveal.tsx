import { useId, useState } from 'react'

type CompareRevealProps = {
  beforeSrc: string
  beforeAlt: string
  afterSrc: string
  afterAlt: string
  beforeLabel?: string
  afterLabel?: string
}

export function CompareReveal({
  beforeSrc,
  beforeAlt,
  afterSrc,
  afterAlt,
  beforeLabel = 'Template',
  afterLabel = 'Composited',
}: CompareRevealProps) {
  const [value, setValue] = useState(55)
  const id = useId()

  return (
    <div className="compare-reveal">
      <div className="compare-reveal__stage">
        <img src={afterSrc} alt={afterAlt} className="compare-reveal__layer" />
        <img
          src={beforeSrc}
          alt={beforeAlt}
          className="compare-reveal__layer compare-reveal__layer--clip"
          style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}
        />
        <div className="compare-reveal__labels" aria-hidden="true">
          <span>{beforeLabel}</span>
          <span>{afterLabel}</span>
        </div>
      </div>
      <label className="compare-reveal__control" htmlFor={id}>
        Reveal comparison
        <input
          id={id}
          type="range"
          min={8}
          max={92}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          aria-valuemin={8}
          aria-valuemax={92}
          aria-valuenow={value}
        />
      </label>
    </div>
  )
}
