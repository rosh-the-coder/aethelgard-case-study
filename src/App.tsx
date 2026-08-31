import { SiteNav } from './components/SiteNav'
import { Act1Problem } from './sections/Act1Problem'
import { Act2Factory } from './sections/Act2Factory'
import { Act3Software } from './sections/Act3Software'
import { Act4Engineering } from './sections/Act4Engineering'
import { Act5Results } from './sections/Act5Results'
import { Act6Reflection } from './sections/Act6Reflection'
import { HeroSection, SummaryStrip } from './sections/HeroSection'
import { ProductProof } from './sections/ProductProof'

export default function App() {
  return (
    <div className="page">
      <a className="skip-link" href="#product-proof">
        Skip to content
      </a>
      <SiteNav />
      <main>
        <HeroSection />
        <SummaryStrip />
        <ProductProof />
        <Act1Problem />
        <Act2Factory />
        <Act3Software />
        <Act4Engineering />
        <Act5Results />
        <Act6Reflection />
      </main>
      <footer className="site-footer">
        <div className="container">
          <span>Aethelgard case study · Digital product factory documentary</span>
          <span>Built for integration into theonlyrosh.com</span>
        </div>
      </footer>
    </div>
  )
}
