import type { ReactNode } from 'react'

type TechDeepDiveProps = {
  title: string
  children: ReactNode
}

export function TechDeepDive({ title, children }: TechDeepDiveProps) {
  return (
    <details className="csk-deep">
      <summary>{title}</summary>
      <div className="csk-deep__body">{children}</div>
    </details>
  )
}
