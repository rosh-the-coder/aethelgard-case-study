import type { EvidenceItem } from './types'

type EvidenceGridProps = {
  items: EvidenceItem[]
  mosaic?: { src: string; alt?: string }[]
  mosaicCaption?: string
}

export function EvidenceGrid({ items, mosaic, mosaicCaption }: EvidenceGridProps) {
  return (
    <div className="csk-evidence">
      <div className="csk-evidence__nums">
        {items.map((item) => (
          <div key={item.label} className="csk-evidence__card">
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
      {mosaic && mosaic.length > 0 ? (
        <>
          <div className="csk-evidence__mosaic" aria-label="Output mosaic">
            {mosaic.map((m) => (
              <img key={m.src} src={m.src} alt={m.alt ?? ''} loading="lazy" decoding="async" />
            ))}
          </div>
          {mosaicCaption ? <p className="csk-evidence__cap">{mosaicCaption}</p> : null}
        </>
      ) : null}
    </div>
  )
}
