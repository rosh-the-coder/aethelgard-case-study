import { AcquisitionTree } from '../diagrams/AcquisitionTree'
import { DiagramShell } from '../diagrams/DiagramShell'
import { TypographyCase } from '../diagrams/TypographyCase'
import { assets } from '../data/assets'
import { act4 } from '../data/content'
import { figures } from '../data/figures'

const modeFigures = {
  ai: figures.modeAi,
  pd: figures.modePd,
  poster: figures.modePoster,
} as const

export function Act4Acquisition() {
  const modes = act4.modes.map((m) => ({
    ...m,
    figure: modeFigures[m.id as keyof typeof modeFigures],
  }))

  return (
    <section className="section" id="act-4" aria-labelledby="act4-title">
      <div className="container">
        <p className="eyebrow">{act4.eyebrow}</p>
        <h2 className="section-title" id="act4-title">
          {act4.title}
        </h2>
        <p className="lead">{act4.intro}</p>

        <DiagramShell
          id="acquisition-tree"
          question={act4.question}
          title="Visual intake decision tree"
          description="Branching intake modes with image support per branch, rejoining shared production."
          takeaways={act4.takeaways}
        >
          <AcquisitionTree modes={modes} />
        </DiagramShell>

        <DiagramShell
          id="typography-case"
          title="Deterministic typography — compact case"
          description="Problem, decision, and result for unreliable model text, with one base versus typed master comparison."
          className="diagram--spaced"
        >
          <TypographyCase
            problem={act4.typography.problem}
            decision={act4.typography.decision}
            result={act4.typography.result}
            beforeSrc={assets.artwork.chilliBase.src}
            beforeAlt={assets.artwork.chilliBase.alt}
            afterSrc={assets.artwork.chilli.src}
            afterAlt={assets.artwork.chilli.alt}
          />
        </DiagramShell>
      </div>
    </section>
  )
}
