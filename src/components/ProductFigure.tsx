import type { ProductFigureDef } from '../data/figures'

type ProductFigureProps = {
  figure: ProductFigureDef
  variant?: 'featured' | 'support' | 'inline' | 'panel'
  showCaptureMeta?: boolean
  className?: string
}

export function ProductFigure({
  figure,
  variant = 'inline',
  showCaptureMeta = true,
  className = '',
}: ProductFigureProps) {
  const isRealImage = Boolean(figure.src && figure.status === 'real')
  const isPosterPreview = figure.id === 'modePoster' && figure.src

  return (
    <figure className={`product-figure product-figure--${variant} ${className}`.trim()}>
      <div className="product-figure__frame" data-status={figure.status}>
        {isRealImage || isPosterPreview ? (
          <img src={figure.src} alt={figure.alt} loading="lazy" decoding="async" />
        ) : (
          <div className="product-figure__slot" role="img" aria-label={figure.alt}>
            <span className="product-figure__slot-title">{figure.title}</span>
            <span className="product-figure__slot-file">{figure.filename}</span>
            {showCaptureMeta ? (
              <span className="product-figure__slot-meta">
                {figure.dimensions} · {figure.format}
              </span>
            ) : null}
          </div>
        )}
        {figure.annotations && figure.annotations.length > 0 ? (
          <ol className="product-figure__marks" aria-label="Planned annotations">
            {figure.annotations.map((a) => (
              <li key={a.n}>
                <span>{a.n}</span>
                <em>{a.label}</em>
              </li>
            ))}
          </ol>
        ) : null}
      </div>
      <figcaption className="product-figure__caption">
        <span className="product-figure__num">Figure {figure.number}</span>
        <strong>{figure.title}</strong>
        <span className="product-figure__desc">{figure.description}</span>
        {showCaptureMeta && figure.status === 'placeholder' ? (
          <span className="product-figure__capture">
            Capture: {figure.capture} · Crop: {figure.crop} · Chrome: {figure.chrome}
          </span>
        ) : null}
      </figcaption>
    </figure>
  )
}
