import type { ReactNode } from 'react'

type DisclosureProps = {
  title: string
  children: ReactNode
}

export function Disclosure({ title, children }: DisclosureProps) {
  return (
    <details className="disclosure">
      <summary className="disclosure__summary">{title}</summary>
      <div className="disclosure__body">{children}</div>
    </details>
  )
}
