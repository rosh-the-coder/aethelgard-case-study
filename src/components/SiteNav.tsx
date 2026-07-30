import { meta } from '../data/content'

export function SiteNav() {
  return (
    <header className="site-nav">
      <div className="site-nav__inner">
        <a className="site-nav__brand" href="#top">
          Aethelgard
        </a>
        <div className="site-nav__meta">
          <span className="hide-sm">{meta.readingMinutes}</span>
          <a href={meta.brandUrl} target="_blank" rel="noreferrer">
            theonlyrosh.com
          </a>
        </div>
      </div>
    </header>
  )
}
