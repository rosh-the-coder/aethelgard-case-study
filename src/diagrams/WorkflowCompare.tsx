import { useId, useState } from 'react'

const beforeNodes = [
  { tool: 'Research tool', friction: 'copy' },
  { tool: 'Image model', friction: 'download' },
  { tool: 'Photoshop', friction: 'export' },
  { tool: 'Upscaler', friction: 'rename' },
  { tool: 'Mockup tool', friction: 'export' },
  { tool: 'SEO tool', friction: 'copy' },
  { tool: 'Packaging', friction: 'upload' },
  { tool: 'Etsy Seller Manager', friction: 'manual entry' },
]

const afterNodes = [
  'Research',
  'Acquire artwork',
  'Select',
  'Finalise',
  'Print pack',
  'Mockups',
  'SEO',
  'Delivery package',
  'Etsy draft',
  'Human review',
]

type WorkflowCompareProps = {
  beforeLabel: string
  afterLabel: string
}

export function WorkflowCompare({ beforeLabel, afterLabel }: WorkflowCompareProps) {
  const [mode, setMode] = useState<'before' | 'after'>('after')
  const id = useId()

  return (
    <div className="workflow-compare">
      <div className="ba-toggle__controls" role="tablist" aria-label="Workflow comparison">
        <button
          type="button"
          role="tab"
          id={`${id}-before`}
          aria-selected={mode === 'before'}
          className={mode === 'before' ? 'is-active' : undefined}
          onClick={() => setMode('before')}
        >
          {beforeLabel}
        </button>
        <button
          type="button"
          role="tab"
          id={`${id}-after`}
          aria-selected={mode === 'after'}
          className={mode === 'after' ? 'is-active' : undefined}
          onClick={() => setMode('after')}
        >
          {afterLabel}
        </button>
      </div>

      <div
        className={`workflow-compare__stage workflow-compare__stage--${mode}`}
        role="tabpanel"
        aria-labelledby={mode === 'before' ? `${id}-before` : `${id}-after`}
      >
        {mode === 'before' ? (
          <div className="workflow-before" aria-label="Fragmented toolchain diagram">
            {beforeNodes.map((node, i) => (
              <div key={node.tool} className="workflow-before__row">
                <div className="workflow-before__node">
                  <span>{node.tool}</span>
                </div>
                {i < beforeNodes.length - 1 ? (
                  <div className="workflow-before__link" aria-hidden="true">
                    <span className="workflow-before__dash" />
                    <span className="workflow-before__friction">{node.friction}</span>
                    <span className="workflow-before__gap">✕</span>
                  </div>
                ) : null}
              </div>
            ))}
            <p className="workflow-before__aside">
              context switching · subscriptions · disconnected files · repeat
            </p>
          </div>
        ) : (
          <div className="workflow-after" aria-label="Unified Aethelgard workflow diagram">
            <div className="workflow-after__rail">
              {afterNodes.map((node) => (
                <div key={node} className="workflow-after__node">
                  {node}
                </div>
              ))}
            </div>
            <p className="workflow-after__artifact">
              Shared artifacts travel with the product folder — not re-exported between apps.
            </p>
          </div>
        )}
      </div>

      <ul className="workflow-notes" aria-label="Comparison notes">
        <li>
          <strong>Before</strong>
          Repeated handoffs and disconnected files.
        </li>
        <li>
          <strong>After</strong>
          One coordinated production workflow.
        </li>
        <li>
          <strong>Publish</strong>
          Remains human-controlled.
        </li>
      </ul>
    </div>
  )
}
