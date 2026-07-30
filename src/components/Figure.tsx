type FigureProps = {
  src: string
  alt: string
  caption?: string
  loading?: 'eager' | 'lazy'
}

export function Figure({ src, alt, caption, loading = 'lazy' }: FigureProps) {
  return (
    <figure className="figure">
      <img src={src} alt={alt} loading={loading} decoding="async" />
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  )
}
