import type { ReactNode } from 'react'

type BlueprintSectionProps = {
  eyebrow?: string
  title: string
  children: ReactNode
}

/** Intentionally breaks the dark editorial language once — attention reset. */
export function BlueprintSection({ eyebrow = 'Blueprint', title, children }: BlueprintSectionProps) {
  return (
    <section className="csk-blueprint wow" aria-labelledby="csk-blueprint-title">
      <div className="csk-blueprint__inner">
        <p className="csk-blueprint__eyebrow">{eyebrow}</p>
        <h2 className="csk-blueprint__title" id="csk-blueprint-title">
          {title}
        </h2>
        <div className="csk-blueprint__body">{children}</div>
      </div>
    </section>
  )
}
