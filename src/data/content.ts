import type { FlowStep } from '../diagrams/SystemFlow'
import type { MockupStep } from '../diagrams/MockupSequence'

export const meta = {
  title: 'Aethelgard',
  readingMinutes: '10–12 min read',
  brandUrl: 'https://theonlyrosh.com',
  centralStory:
    'I turned a fragmented manual Etsy production workflow into a software production system.',
}

export const hero = {
  name: 'Aethelgard',
  headline: 'A local digital-product factory that turns an artwork idea into a reviewable Etsy draft.',
  supporting:
    'Research · Multi-provider generation · Print production · Mockup compositing · SEO · Packaging · Etsy Open API',
  spine: ['Concept', 'Artwork', 'Print pack', 'Mockups', 'Etsy draft'],
  disciplines: [
    'Design Engineering',
    'Applied AI',
    'Creative Technology',
    'Workflow Automation',
    'Product Design',
  ],
}

export const summary = {
  items: [
    { label: 'Role', value: 'Solo Product Builder / Design Engineer' },
    { label: 'Duration', value: 'Approximately 10 days' },
    { label: 'Product', value: 'Local production suite' },
    { label: 'Scope', value: 'Research to Etsy draft' },
    { label: 'Status', value: 'Operational MVP' },
    { label: 'Final action', value: 'Human-controlled publish' },
  ],
}

export const act1 = {
  eyebrow: 'The fragmented workflow',
  question: 'What did one Etsy listing actually require?',
  title: 'A fragmented toolchain — not a product system.',
  intro:
    'Creating digital wall art meant jumping between research, generation, Photoshop, upscaling, mockups, SEO, packaging, and Seller Manager. Files and data were re-entered by hand.',
  stages: [
    'Research tool',
    'AI image tool',
    'Public-domain search',
    'Photoshop',
    'Upscaler',
    'Mockup tool',
    'SEO writing',
    'File packaging',
    'Etsy Seller Manager',
  ],
  frictions: [
    'Multiple subscriptions',
    'Disconnected files',
    'Repeated exports',
    'Duplicated data entry',
    'Inconsistent outputs',
    'Manual handoffs',
  ],
  estimates: [
    { label: 'Disconnected stages', value: '~9', note: 'Personal estimate of the manual chain' },
    { label: 'Time per listing', value: '~2 hours', note: 'Personal estimate — not measured ops data' },
    { label: 'Tool stack', value: '€100–€150/mo', note: 'Personal estimate of subscriptions avoided' },
  ],
  takeaways: [
    'The bottleneck was production, not image generation.',
    'Each handoff reintroduced cost, delay, and inconsistency.',
    'A listing was a factory job stuck in separate apps.',
  ],
}

export const act2 = {
  eyebrow: 'The digital factory',
  statement: 'I wanted to manufacture digital products, not manually assemble them.',
  beforeLabel: 'Before',
  afterLabel: 'After',
  takeaways: [
    'Before: repeated handoffs and disconnected files.',
    'After: one coordinated production workflow.',
    'Publication remains human-controlled.',
  ],
}

export const act3 = {
  eyebrow: 'The software',
  question: 'How does one concept become a reviewable draft?',
  title: 'A factory with coordinated stations.',
  intro:
    'Each station does one job. AI proposes candidates. Code validates geometry and marketplace rules. Humans approve irreversible steps.',
  flow: [
    {
      id: 'concept',
      label: 'Concept',
      detail: 'Niche brief or visual idea.',
      actor: 'human',
      input: 'Market angle',
      output: 'Product brief',
    },
    {
      id: 'mode',
      label: 'Intake mode',
      detail: 'AI, public-domain, or poster.',
      actor: 'human',
      input: 'Brief',
      output: 'Mode choice',
    },
    {
      id: 'candidates',
      label: 'Candidate creation',
      detail: 'Multi-provider or museum sources.',
      actor: 'mixed',
      input: 'Prompt / query',
      output: 'Candidate set',
    },
    {
      id: 'reject',
      label: 'Quality gate',
      detail: 'Blank-frame and aspect checks.',
      actor: 'code',
      input: 'Candidates',
      output: 'Valid frames',
    },
    {
      id: 'select',
      label: 'Human winner selection',
      detail: 'Models do not auto-promote.',
      actor: 'human',
      input: 'Valid candidates',
      output: 'Selected artwork',
    },
    {
      id: 'master',
      label: 'Master preparation',
      detail: 'One high-resolution source of truth.',
      actor: 'code',
      input: 'Winner',
      output: 'Master image',
    },
    {
      id: 'prints',
      label: 'Print generation',
      detail: '300 DPI matrix from the master.',
      actor: 'code',
      input: 'Master',
      output: 'Print pack',
    },
    {
      id: 'mockups',
      label: 'Mockup production',
      detail: 'Perspective and lighting compositor.',
      actor: 'code',
      input: 'Master + templates',
      output: 'Mockup set',
    },
    {
      id: 'seo',
      label: 'SEO and metadata',
      detail: 'Constrained titles, tags, descriptions.',
      actor: 'mixed',
      input: 'Product context',
      output: 'Listing JSON',
    },
    {
      id: 'package',
      label: 'Delivery packaging',
      detail: 'Buyer PDF + product folder.',
      actor: 'code',
      input: 'Prints + copy',
      output: 'Delivery PDF',
    },
    {
      id: 'draft',
      label: 'Etsy draft',
      detail: 'Open API v3 — draft only.',
      actor: 'API',
      input: 'Package + OAuth',
      output: 'Draft listing',
    },
    {
      id: 'review',
      label: 'Human review',
      detail: 'Quality, crops, SEO, pricing.',
      actor: 'human',
      input: 'Draft',
      output: 'Approved draft',
    },
    {
      id: 'publish',
      label: 'Manual publish',
      detail: 'Irreversible action stays human.',
      actor: 'human',
      input: 'Approved draft',
      output: 'Live listing (outside tool)',
    },
  ] as FlowStep[],
  reviewGates: ['Crop review', 'SEO review', 'Pricing and attributes', 'Publish manually'],
  stations: [
    { id: 'gen', name: 'Generation', role: 'Provider dispatch and normalisation' },
    { id: 'print', name: 'Print finalisation', role: 'Master + 300 DPI sizes' },
    { id: 'mock', name: 'Mockup engine', role: 'Perspective, light, glare' },
    { id: 'seo', name: 'SEO', role: 'Constrained listing copy' },
    { id: 'pd', name: 'Public-domain clients', role: 'Met / Wikimedia intake' },
    { id: 'etsy', name: 'Etsy API', role: 'OAuth + draft upload' },
  ],
  factoryIntro: 'Click a station or artifact to inspect inputs, outputs, and actor.',
  architectureFlow: [
    'Operator',
    'Local browser dashboard',
    'Python control plane',
    'Filesystem product folders',
  ],
  archTakeaways: [
    'Local architecture matched a single operator.',
    'Product folders were the primary unit of storage.',
    'Long-running media jobs were separated from request handling.',
  ],
  folderSketch: [
    'artwork-runs/<run>/<piece>/',
    '├── master.png',
    '├── meta.json · listing.json',
    '├── prints/',
    '├── mockup_*.jpg',
    '├── Download_Links.pdf',
    '└── upload_status.json',
  ],
  whyFit: [
    'One operator — no tenancy or billing surface',
    'Media-heavy artifacts that are easy to inspect',
    'Easy recovery — each product is a folder',
    'Low infrastructure overhead',
  ],
  tradeoffs: [
    'Weak concurrency under parallel writes',
    'Limited querying compared with a database',
    'Not designed for multi-user scale',
  ],
  components: [
    { name: 'Browser dashboard', role: 'Operator workflow and review' },
    { name: 'Python HTTP server', role: 'Orchestration and JSON APIs' },
    { name: 'Generation CLI', role: 'Provider dispatch and normalisation' },
    { name: 'Artwork finaliser', role: 'Master + 300 DPI print matrix' },
    { name: 'Mockup compositor', role: 'Perspective and lighting' },
    { name: 'SEO + PDF modules', role: 'Copy validation and delivery' },
    { name: 'Etsy API client', role: 'OAuth and draft upload' },
    { name: 'Filesystem store', role: 'Product aggregate root' },
  ],
  takeaways: [
    'The product is the full chain — mockups are one station.',
    'Human gates sit where mistakes become irreversible.',
    'Filesystem folders make every product inspectable.',
  ],
}

export const act4 = {
  eyebrow: 'Engineering the system',
  question: 'How does artwork enter the factory?',
  title: 'Three intake modes. One downstream pipeline.',
  intro: 'Mode choice changes acquisition rules — not the rest of the factory.',
  modes: [
    {
      id: 'ai',
      title: 'AI generation',
      rule: 'Multi-provider candidates',
      body: 'Cloudflare Workers AI, Gemini, OpenAI, OpenRouter behind one dispatch layer.',
      output: 'Candidate set',
    },
    {
      id: 'pd',
      title: 'Public-domain import',
      rule: 'Preserve native ratios',
      body: 'Met Museum and Wikimedia. Packs keep native proportions.',
      output: 'Imported artwork + attribution',
    },
    {
      id: 'poster',
      title: 'Graphic poster',
      rule: 'Model image · code type',
      body: 'Model for the image. Code for exact typography.',
      output: 'Typed poster master',
    },
  ],
  typography: {
    problem: 'Image models produced unreliable text.',
    decision: 'Use the model for the image and code for typography.',
    result: 'Exact, editable, repeatable poster text.',
  },
  takeaways: [
    'Intake is plural; production is shared.',
    'Typography is a code problem, not a prompt problem.',
    'Invalid frames are rejected before they become products.',
  ],
}

export const act5 = {
  eyebrow: 'Engineering the system',
  question: 'Why did early mockups look fake?',
  title: 'One station: perspective, light, and glass — not the whole factory.',
  lead: 'I was recreating the Photoshop workflow I already knew, except the computer performed every step automatically.',
  story:
    'Flat pastes sat in the frame but ignored perspective, room light, glare, and contact shadows. The compositor encodes that sequence.',
  pipeline: [
    {
      id: 'artwork',
      label: 'Artwork',
      kind: 'real',
      note: 'Source master from a real product run.',
    },
    {
      id: 'crop',
      label: 'Cover crop',
      kind: 'diagram',
      note: 'Cover-crop to frame aspect without stretching.',
    },
    {
      id: 'perspective',
      label: 'Perspective',
      kind: 'diagram',
      note: 'Quadrilateral warp into the photographed plane.',
    },
    {
      id: 'lighting',
      label: 'Lighting',
      kind: 'diagram',
      note: 'Scene luminance modulates the warped artwork.',
    },
    {
      id: 'glare',
      label: 'Glare / shadow',
      kind: 'diagram',
      note: 'Specular highlights and contact shadow layers.',
    },
    {
      id: 'final',
      label: 'Final',
      kind: 'real',
      note: 'Composited lifestyle mockup from the production pipeline.',
    },
  ] as MockupStep[],
  tech: [
    {
      title: 'Quadrilateral perspective warp',
      body: 'Frame corners drive an eight-parameter transform into the photographed plane.',
    },
    {
      title: 'Luminance & soft light',
      body: 'Scene luminance modulates artwork so it inherits room light.',
    },
    {
      title: 'Masks, glare, calibration',
      body: 'Supersampled masks, specular highlights, contact shadows; per-template tuning (incomplete on some templates).',
    },
  ],
  takeaways: [
    'Mockups are a subsystem — necessary, not the product thesis.',
    'Believable commerce imagery needs geometry and light, not alpha paste.',
    'Calibration quality still varies by template.',
  ],
}

export const act6 = {
  eyebrow: 'Engineering the system',
  question: 'What keeps generative chaos from shipping?',
  title: 'Models propose. Code enforces. Humans approve.',
  intro: 'Deterministic contracts wrap AI. The marketplace path uses the official API — not the Seller Manager DOM.',
  contracts: [
    { title: 'Blank-frame rejection', body: 'Useless frames never enter the product folder.' },
    { title: 'Prompt constraints', body: 'Sanitisation, spines, envelopes, negatives.' },
    { title: 'Aspect normalisation', body: 'Expected product aspects before finalisation.' },
    { title: 'Deterministic typography', body: 'Real fonts in code for posters.' },
    { title: 'Exact print dimensions', body: 'One master → 300 DPI matrix.' },
    { title: 'Etsy field validation', body: 'Title and tag limits enforced.' },
  ],
  etsy: {
    title: 'Do not automate the interface when the platform gives you a supported layer.',
    story:
      'Playwright filled Seller Manager until bot detection made the path unreliable. Developer approval arrived in roughly three hours. The durable path is Open API v3 with OAuth2 PKCE — drafts only.',
    path: ['Browser automation', 'Bot detection', 'Developer access', 'Open API v3 drafts'],
    evidence: {
      status: 'succeeded',
      listingId: '4543935955',
      via: 'Open API v3',
      uploadedAt: '2026-07-25T17:04:14Z',
      message: 'API draft created',
    },
    tech: [
      { title: 'OAuth2 PKCE', body: 'Local operator auth, token storage, refresh.' },
      { title: 'Draft + multipart uploads', body: 'Official endpoints — not DOM scraping.' },
      { title: 'Evidence on disk', body: 'Listing IDs persisted beside product artifacts.' },
    ],
  },
  takeaways: [
    'Contracts make model failure visible early.',
    'Supported APIs beat brittle UI automation.',
    'Draft-only upload keeps publish human.',
  ],
}

export const act7 = {
  eyebrow: 'Evidence on disk',
  question: 'What exists on disk — and what does Git actually prove?',
  title: 'Project artifacts, not commercial performance.',
  intro:
    'Numbers are counted from local product folders. Git has two commits; Open API lives in the working tree plus upload evidence.',
  verified: [
    { value: '28', label: 'Artwork-run folders' },
    { value: '24', label: 'Metadata files' },
    { value: '84', label: 'Mockup images' },
    { value: '3', label: 'Delivery PDFs' },
    { value: '1', label: 'Open API draft' },
    { value: '3', label: 'Acquisition modes' },
  ],
  also: [
    'Working 300 DPI print matrix from one master',
    'Working perspective and lighting compositor',
    'Draft listing evidence beside product files',
  ],
  evolution: [
    {
      id: 'manual',
      label: 'Manual toolchain',
      detail: 'Fragmented tools — documented operator problem.',
      source: 'Documentation / reported',
    },
    {
      id: 'initial',
      label: 'Initial local suite',
      detail: 'Dashboard, mockups, Playwright upload path.',
      source: 'Git 0365758 · 2026-07-21',
    },
    {
      id: 'pd',
      label: 'PD & poster expansion',
      detail: 'Stronger public-domain and deterministic poster paths.',
      source: 'Git ea927e0 · 2026-07-25',
    },
    {
      id: 'api',
      label: 'Open API drafts',
      detail: 'etsy_api.py + listing 4543935955 evidence on disk.',
      source: 'Working tree + artifact (not in Git HEAD)',
    },
  ],
  takeaways: [
    'Evidence is inspectable product folders — not revenue charts.',
    'Git history is sparse; do not invent day-level UI archaeology.',
    'Open API is real on disk even though it is not yet committed.',
  ],
}

export const act8 = {
  eyebrow: 'What this changed about how I build',
  title: 'What this changed about how I build.',
  paragraphs: [
    'Constraints came first: remove repetitive work, avoid a subscription stack, preserve quality, keep final control.',
    'When a method hit a wall, I changed layers — free tiers, bot detection, bad model text. Exact sizes and typography belong to code.',
    'Cursor accelerated implementation. I stayed responsible for the brief, judgment, and documenting evidence beside the work.',
  ],
  failures: [
    {
      fail: 'Model free-tier limits.',
      fix: 'Cloudflare Workers AI behind a Worker boundary.',
    },
    {
      fail: 'Etsy bot detection.',
      fix: 'Open API v3 + OAuth2 PKCE drafts.',
    },
    {
      fail: 'Flat mockup pastes.',
      fix: 'Perspective, luminance, glare in code.',
    },
    {
      fail: 'Unreliable model text.',
      fix: 'Deterministic typography.',
    },
  ],
  limitations: [
    'Local single-user product — not SaaS',
    'No revenue or conversion evidence',
    'Minimal automated testing; no CI',
    'Incomplete mockup-template calibration',
    'Filesystem concurrency limits',
    'Research data can degrade to estimates',
    'Final publication remains manual',
  ],
  closingSteps: [
    'Observe a real workflow',
    'Identify where judgment matters',
    'Encode repetitive expertise',
    'Put deterministic contracts around AI',
    'Keep humans in control',
  ],
  closing:
    'Aethelgard began as a way to avoid repetitive Etsy production work. It became a demonstration of how I turn creative workflows into reliable software systems.',
}

/** @deprecated compatibility aliases */
export const why = act1
export const beforeAfter = act2
export const acquisition = act4
export const mockup = act5
export const etsy = act6.etsy
export const architecture = act3
export const evidence = act7
export const failures = { eyebrow: 'Failures', title: 'Do not fight the wall.', items: act8.failures }
export const reflection = { eyebrow: act8.eyebrow, title: act8.title, paragraphs: act8.paragraphs }
export const limitations = { eyebrow: 'Limitations', title: 'Honest MVP boundaries.', items: act8.limitations }
export const closing = { steps: act8.closingSteps, statement: act8.closing }
