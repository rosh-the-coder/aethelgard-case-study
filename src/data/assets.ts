/** Asset paths — all under /assets (public). Real product outputs unless noted. */
export const assets = {
  hero: {
    src: './assets/hero-owl-mockup.jpg',
    alt: 'Barn owl painting composited into a glass-frame lifestyle mockup',
    credit: 'Real Aethelgard mockup output',
  },
  mosaic: [
    './assets/gallery-owl-dark.jpg',
    './assets/gallery-florals-shelf.jpg',
    './assets/gallery-mushroom-boho.jpg',
    './assets/gallery-plaster-floor.jpg',
    './assets/gallery-japandi-shelf.jpg',
    './assets/mockup-florals-glass.jpg',
    './assets/hero-owl-mockup.jpg',
    './assets/mockup-coastal-glass.jpg',
  ],
  artwork: {
    owl: {
      src: './assets/artwork-owl-master.png',
      alt: 'Master PNG of moody barn owl painting',
    },
    chilli: {
      src: './assets/artwork-chilli-master.png',
      alt: 'Master PNG of chilli poster with deterministic typography',
    },
    chilliBase: {
      src: './assets/poster-chilli-base.png',
      alt: 'AI visual base before typography layers',
    },
  },
  mockupProgress: {
    artwork: {
      src: './assets/artwork-owl-master.png',
      alt: 'Source artwork master before mockup compositing',
    },
    template: {
      src: './assets/template-glass-blank.png',
      alt: 'Empty glass-frame mockup template',
    },
    final: {
      src: './assets/hero-owl-mockup.jpg',
      alt: 'Final composited lifestyle mockup with perspective and lighting',
    },
    shelfBlank: {
      src: './assets/template-shelf-blank.png',
      alt: 'Empty shelf mockup template',
    },
    shelfComposed: {
      src: './assets/gallery-florals-shelf.jpg',
      alt: 'Florals after shelf-template compositing',
    },
  },
  prints: [
    { src: './assets/print-chilli-4x6.jpg', label: '4×6' },
    { src: './assets/print-chilli-8x10.jpg', label: '8×10' },
    { src: './assets/print-chilli-11x14.jpg', label: '11×14' },
  ],
  placeholders: {
    dashboard: {
      label: 'Dashboard overview',
      note: '1920×1080 · full operator dashboard, no secrets',
    },
    research: {
      label: 'Research interface',
      note: '1440×900 · niche / listing research view',
    },
    generation: {
      label: 'Generation view',
      note: '1440×900 · candidate grid + provider selection',
    },
    mockupStudio: {
      label: 'Mockup studio',
      note: '1440×900 · template pick + composed previews',
    },
    etsyDraftUi: {
      label: 'Etsy draft in Seller Manager',
      note: '1440×900 · listing 4543935955 draft state',
    },
  },
} as const
