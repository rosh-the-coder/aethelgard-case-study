import { AnnotatedFigure, EvidenceGrid, TechDeepDive } from '../case-study-kit'
import { DiagramShell } from '../diagrams/DiagramShell'
import { EvolutionTimeline } from '../diagrams/EvolutionTimeline'
import { assets } from '../data/assets'
import { act6, act7 } from '../data/content'
import { figures } from '../data/figures'

/** ACT 5 — Results & evidence. */
export function Act5Results() {
  return (
    <section className="section section--feature" id="act-5" aria-labelledby="act5-title">
      <div className="container">
        <p className="eyebrow">Evidence on disk</p>
        <h2 className="section-title section-title--wide" id="act5-title">
          {act7.title}
        </h2>
        <p className="lead lead--short">{act7.intro}</p>

        <div className="etsy-wow">
          <aside className="draft-evidence" aria-label="Verified Etsy Open API draft evidence">
            <p className="draft-evidence__badge">Verified project artifact</p>
            <dl className="draft-evidence__grid">
              <div>
                <dt>Status</dt>
                <dd>{act6.etsy.evidence.status}</dd>
              </div>
              <div>
                <dt>Listing ID</dt>
                <dd>
                  <code>{act6.etsy.evidence.listingId}</code>
                </dd>
              </div>
              <div>
                <dt>Via</dt>
                <dd>{act6.etsy.evidence.via}</dd>
              </div>
              <div>
                <dt>Uploaded</dt>
                <dd>
                  <time dateTime={act6.etsy.evidence.uploadedAt}>{act6.etsy.evidence.uploadedAt}</time>
                </dd>
              </div>
            </dl>
            <p className="draft-evidence__msg">{act6.etsy.evidence.message}</p>
          </aside>
          <AnnotatedFigure
            number={figures.etsyDraft.number}
            title={figures.etsyDraft.title}
            caption={figures.etsyDraft.description}
            notice="Verified draft artifact from the Open API path."
            alt={figures.etsyDraft.alt}
            filename={figures.etsyDraft.filename}
            dimensions={figures.etsyDraft.dimensions}
            status="placeholder"
            size="large"
          />
        </div>

        <EvidenceGrid
          items={act7.verified}
          mosaic={assets.mosaic.map((src) => ({ src }))}
          mosaicCaption="Sample mockup artifacts from local product folders"
        />

        <div className="evidence-artifacts">
          <AnnotatedFigure
            number={figures.printMatrix.number}
            title={figures.printMatrix.title}
            caption={figures.printMatrix.description}
            src={figures.printMatrix.src}
            alt={figures.printMatrix.alt}
            filename={figures.printMatrix.filename}
            status="real"
            size="inline"
          />
          <AnnotatedFigure
            number={figures.folderAnatomy.number}
            title={figures.folderAnatomy.title}
            caption={figures.folderAnatomy.description}
            alt={figures.folderAnatomy.alt}
            filename={figures.folderAnatomy.filename}
            dimensions={figures.folderAnatomy.dimensions}
            status="placeholder"
            size="inline"
          />
        </div>

        <DiagramShell
          id="evolution"
          question={act7.question}
          title="Honest evolution stages"
          description="Manual toolchain through Git-proven expansion to Open API drafts."
          takeaways={act7.takeaways}
          className="diagram--spaced"
        >
          <EvolutionTimeline items={act7.evolution} />
        </DiagramShell>

        <TechDeepDive title="Also verified on disk">
          <ul>
            {act7.also.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </TechDeepDive>
      </div>
    </section>
  )
}
