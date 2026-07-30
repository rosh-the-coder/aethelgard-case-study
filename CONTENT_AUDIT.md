# Content Audit

Claim → source → status for the interactive narrative pass.

**Legend:** verified · reported · estimated · planned · needs confirmation

Sources: `project-docs/projects/aethelgard/*`, local artifacts, `GIT_HISTORY_AUDIT.md`.

---

## Positioning

| Claim | Source | Status |
|---|---|---|
| Digital-product factory / production suite (not SaaS) | CASE_STUDY, RESUME_EVIDENCE | verified |
| Central story: fragmented workflow → software system | CASE_STUDY (editorial) | reported |
| Research → … → Etsy draft → human review | CASE_STUDY, ARCHITECTURE | verified |
| Role / ~10 days / operational MVP / human publish | CASE_STUDY, TIMELINE, RESUME | reported / estimated / verified |

## Act 1 — Fragmented workflow

| Claim | Source | Status |
|---|---|---|
| ~9 disconnected stages | CASE_STUDY chain | estimated (labelled) |
| ~2 hours / listing | RESUME_EVIDENCE | estimated |
| €100–€150/mo tool stack | RESUME_EVIDENCE | estimated |
| Friction: subscriptions, handoffs, exports, etc. | CASE_STUDY | reported |

## Act 3 — Factory / architecture

| Claim | Source | Status |
|---|---|---|
| Local modular monolith + FS + subprocesses | ARCHITECTURE | verified |
| Stations: gen, print, mockup, SEO, PD, Etsy | ARCHITECTURE | verified |
| Three architecture takeaways (operator, folders, jobs) | ARCHITECTURE / ENGINEERING_DECISIONS | verified |
| Review gates before publish | CASE_STUDY | verified |

## Act 4 — Acquisition / typography

| Claim | Source | Status |
|---|---|---|
| AI / PD / poster modes | RESUME_EVIDENCE | verified |
| Model image + code typography | ENGINEERING_DECISIONS | verified |
| Chilli base vs typed master as support evidence | Disk artifacts | verified |

## Act 5 — Mockup subsystem

| Claim | Source | Status |
|---|---|---|
| Photoshop workflow → compositor | CASE_STUDY | reported / verified impl |
| Warp, luminance, glare, shadows | CASE_STUDY, RESUME | verified |
| Incomplete calibration | LIMITATIONS | verified |

## Act 6 — Contracts / Etsy

| Claim | Source | Status |
|---|---|---|
| Deterministic contracts list | ENGINEERING_DECISIONS, RESUME | verified |
| Playwright path existed | Git `0365758` / `upload_to_etsy.py` | verified |
| Bot detection → Open API story | CASE_STUDY | reported |
| ~3 hour developer approval | CASE_STUDY / TIMELINE | reported |
| Open API + PKCE in working tree | `etsy_api.py` | verified (not in Git HEAD) |
| Draft listing `4543935955` @ 2026-07-25T17:04:14Z | upload_status.json | verified |

## Act 7 — Evidence / evolution

| Claim | Source | Status |
|---|---|---|
| 28 / 24 / 84 / 3 / 1 / 3 artifact counts | RESUME_EVIDENCE + disk | verified |
| Only two Git commits (Jul 21, Jul 25) | git log | verified |
| PD/poster expansion in `ea927e0` | git show | verified |
| Open API not in Git HEAD | git ls-tree vs working tree | verified |
| No invented historical UIs | process rule | verified |

## Act 8 — Reflection / limits

| Claim | Source | Status |
|---|---|---|
| Failure→layer stories (CF, API, mockups, type) | CASE_STUDY, TIMELINE | reported |
| Limitations list | LIMITATIONS_AND_ROADMAP | verified |
| Closing philosophy | CASE_STUDY | reported |

## Needs confirmation

| Item | Why |
|---|---|
| Canonical public brand string | Naming varies |
| Upstream Alek credit on public page | Ownership nuance |
| Any live (non-draft) listing screenshot | Only draft evidenced |
| Commit Open API to product Git | Discrepancy documented |

## Intentionally omitted

- Fake day-by-day Git scrubber dates  
- Revenue / conversion / users  
- Rogue reconstructed UIs from unrunnable history  
- Multiple large chilli mockup hero images  
