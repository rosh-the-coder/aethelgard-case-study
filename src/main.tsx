import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles/tokens.css'
import './styles/components.css'
import './styles/sections.css'
import './styles/diagrams.css'
import './styles/visual.css'
import './case-study-kit/kit.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
