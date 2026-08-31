# Aethelgard Case Study

Interactive visual narrative for **Aethelgard** — a local digital-product factory for wall-art production.

Intended home: [theonlyrosh.com](https://theonlyrosh.com)  
**GitHub:** [github.com/rosh-the-coder/aethelgard-case-study](https://github.com/rosh-the-coder/aethelgard-case-study)

## Open this locally

This repo is a **viewable case study**. You can clone it and run the site on your machine to read the story and click through the diagrams. **Aethelgard itself will not run for you** — image generation, Etsy drafts, Google Drive, and shop credentials live in a separate operator suite and are not included here.

**[Open in Cursor / VS Code](vscode://vscode.git/clone?url=https://github.com/rosh-the-coder/aethelgard-case-study.git)** · **[View on GitHub](https://github.com/rosh-the-coder/aethelgard-case-study)** · **[Browse in the browser](https://github.dev/rosh-the-coder/aethelgard-case-study)**

```bash
git clone https://github.com/rosh-the-coder/aethelgard-case-study.git
cd aethelgard-case-study
npm install
npm run dev
```

Then open the local URL printed in the terminal (usually `http://localhost:5173`).

The factory codebase (not this site) is [aethelgard-production-suite](https://github.com/rosh-the-coder/aethelgard-production-suite) — that repo is also inspectable, but it will not operate as it does on the original machine without private API keys and OAuth.

## Run scripts

| Script | Purpose |
|---|---|
| `npm run dev` | Dev server |
| `npm run build` | Typecheck + production build |
| `npm run preview` | Preview `dist/` |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript |

## What this is

An eight-act editorial case study with custom diagrams and a few primary interactions:

- fragmented toolchain → unified factory
- interactive production flow + factory map
- acquisition decision tree
- mockup subsystem (not the whole story)
- Etsy Open API migration path + artifact evidence
- honest Git evolution timeline

See `CASE_STUDY_STRUCTURE.md` and `DIAGRAM_SYSTEM.md`.

## Content sources

Documentation pack under `project-docs/projects/aethelgard/`.  
Git investigation: `GIT_HISTORY_AUDIT.md` (worktree-safe).  
Claim map: `CONTENT_AUDIT.md`.

## Assets

Real mockups/masters in `public/assets/`.  
Chilli poster appears only in the compact typography case.  
UI screenshots are labelled slots — see `ASSET_CHECKLIST.md`.

## Design

Dark editorial atelier, Fraunces + IBM Plex Sans, gold accent.  
Interactions respect reduced motion and keyboard/touch.
