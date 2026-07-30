type TypographyCaseProps = {
  problem: string
  decision: string
  result: string
  beforeSrc: string
  beforeAlt: string
  afterSrc: string
  afterAlt: string
}

export function TypographyCase({
  problem,
  decision,
  result,
  beforeSrc,
  beforeAlt,
  afterSrc,
  afterAlt,
}: TypographyCaseProps) {
  return (
    <div className="type-case">
      <ol className="type-case__steps">
        <li>
          <span className="type-case__k">Problem</span>
          <p>{problem}</p>
        </li>
        <li>
          <span className="type-case__k">Decision</span>
          <p>{decision}</p>
        </li>
        <li>
          <span className="type-case__k">Result</span>
          <p>{result}</p>
        </li>
      </ol>
      <div className="type-case__compare">
        <figure>
          <img src={beforeSrc} alt={beforeAlt} loading="lazy" decoding="async" />
          <figcaption>Visual base</figcaption>
        </figure>
        <figure>
          <img src={afterSrc} alt={afterAlt} loading="lazy" decoding="async" />
          <figcaption>Typed master</figcaption>
        </figure>
      </div>
    </div>
  )
}
