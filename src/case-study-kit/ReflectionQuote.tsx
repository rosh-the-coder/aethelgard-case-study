type ReflectionQuoteProps = {
  children: string
  attribution?: string
}

export function ReflectionQuote({ children, attribution }: ReflectionQuoteProps) {
  return (
    <blockquote className="csk-quote wow">
      <p>{children}</p>
      {attribution ? <cite>{attribution}</cite> : null}
    </blockquote>
  )
}
