import type { ProductFigureDef } from '../data/figures'
import { ProductFigure } from './ProductFigure'

type AnnotatedProductFigureProps = {
  figure: ProductFigureDef
  variant?: 'featured' | 'support' | 'inline' | 'panel'
}

/** Placeholder-ready annotated figure — markers listed accessibly until real shots land. */
export function AnnotatedProductFigure({ figure, variant = 'featured' }: AnnotatedProductFigureProps) {
  return (
    <div className="annotated-figure">
      <ProductFigure figure={figure} variant={variant} />
      {figure.annotations && figure.annotations.length > 0 ? (
        <p className="visually-hidden">
          Planned annotations:{' '}
          {figure.annotations.map((a) => `${a.n}. ${a.label}`).join('; ')}
        </p>
      ) : null}
    </div>
  )
}
