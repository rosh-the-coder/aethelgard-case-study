import { SiteNav } from './components/SiteNav'
import { Act1Fragmented } from './sections/Act1Fragmented'
import { Act2Idea } from './sections/Act2Idea'
import { Act3System } from './sections/Act3System'
import { Act4Acquisition } from './sections/Act4Acquisition'
import { Act5Mockup } from './sections/Act5Mockup'
import { Act6Contracts } from './sections/Act6Contracts'
import { Act7Evidence } from './sections/Act7Evidence'
import { Act8Reflection } from './sections/Act8Reflection'
import { HeroSection, ProductTourSection, SummaryStrip } from './sections/HeroSection'

export default function App() {
  return (
    <div className="page">
      <a className="skip-link" href="#product-tour">
        Skip to content
      </a>
      <SiteNav />
      <main>
        <HeroSection />
        <SummaryStrip />
        <ProductTourSection />
        <Act1Fragmented />
        <Act2Idea />
        <Act3System />
        <Act4Acquisition />
        <Act5Mockup />
        <Act6Contracts />
        <Act7Evidence />
        <Act8Reflection />
      </main>
      <footer className="site-footer">
        <div className="container">
          <span>Aethelgard case study · Interactive visual narrative</span>
          <span>Built for integration into theonlyrosh.com</span>
        </div>
      </footer>
    </div>
  )
}
