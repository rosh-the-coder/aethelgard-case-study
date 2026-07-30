import type { ReactNode } from 'react'

type DiagramShellProps = {
  id?: string
  title: string
  question?: string
  description: string
  children: ReactNode
  takeaways?: string[]
  className?: string
}

export function DiagramShell({
  id,
  title,
  question,
  description,
  children,
  takeaways,
  className = '',
}: DiagramShellProps) {
  const titleId = id ? `${id}-title` : undefined

  return (
    <figure
      className={`diagram ${className}`.trim()}
      id={id}
      aria-labelledby={titleId}
    >
      {question ? <p className="diagram__question">{question}</p> : null}
      <figcaption className="diagram__caption">
        <h3 className="diagram__title" id={titleId}>
          {title}
        </h3>
      </figcaption>
      <p className="visually-hidden">{description}</p>
      <div className="diagram__body">{children}</div>
      {takeaways && takeaways.length > 0 ? (
        <ul className="takeaways" aria-label="Takeaways">
          {takeaways.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      ) : null}
    </figure>
  )
}
