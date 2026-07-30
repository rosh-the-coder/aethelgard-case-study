# Git History Audit — Aethelgard Production Suite

**Repository inspected:** `roshwillberich` (product codebase)  
**Method:** `git log`, `git show --stat`, and `git worktree add` at commit `0365758` (detached) so the current working tree was not checked out away.  
**Worktree path used:** `F:\Apps\Etsy 2026\_wt-aethelgard-initial`  
**Case-study folder:** not a git repository.

## Commits present

| SHA (short) | Date | Subject |
|---|---|---|
| `0365758` | 2026-07-21 | Initial commit: Aethelgard Art Co. production suite |
| `ea927e0` | 2026-07-25 | Document launch progress and ship suite advances since initial commit |

Only **two** commits exist on `master`. There is no dense day-by-day commit history matching the reconstructed TIMELINE.md narrative.

## What the initial commit already contained (`0365758`)

Verified from the worktree / tree listing:

- Local dashboard (`tooling/upload/dashboard.html`)
- Python control plane (`tooling/upload/server.py`)
- Mockup compositor (`tooling/mockups/generate_mockups.py`, templates, frame detection)
- Playwright-based Etsy upload path (`tooling/upload/upload_to_etsy.py`)
- Research / scrape helpers
- Poster compose and public-domain modules (earlier forms)
- Handover / pipeline docs

**Not safe to claim from Git alone:** a sequence of separately committed UIs for “day 1…day 10.” The principal system appears as one large initial snapshot.

## What the second commit added (`ea927e0`)

Verified from `git show --stat`:

- Expanded dashboard and server
- Stronger public-domain and poster-compose paths (fonts added)
- Mockup generator and template JSON updates
- `LAUNCH_PROGRESS.md`
- Handover / README updates

This supports a real evolution stage: **PD + poster reliability and launch documentation** after the initial suite.

## Working tree vs Git (important discrepancy)

| Artifact | In Git HEAD (`ea927e0`) | In current working tree / disk |
|---|---|---|
| `tooling/upload/etsy_api.py` (Open API v3 + OAuth2 PKCE) | **Absent** | **Present** |
| Playwright `upload_to_etsy.py` | Present | Present (legacy path) |
| Evidenced draft listing `4543935955` (`upload_status.json`) | Not in Git (generated artifact) | Present on disk (2026-07-25) |

**Conclusion:** Etsy Open API migration is **verified by local code + product artifacts**, not by a committed Git revision. The case study must not invent a “historical Open API commit” or fake old Seller Manager screenshots.

## Evolution stages safe to show on the page

1. **Fragmented manual workflow** — documentation / operator report (not a Git UI).  
2. **Initial local suite** — Git `0365758` (dashboard, mockups, Playwright upload intent).  
3. **PD / poster expansion** — Git `ea927e0`.  
4. **Open API draft path** — working-tree `etsy_api.py` + disk upload evidence (label as verified artifacts, not as a dated Git milestone).

## What was not done

- Did **not** run historical dashboard builds or invent screenshots of “rogue” old UIs.  
- Did **not** claim exact day-level commit dates beyond the two AuthorDates above.  
- Did **not** treat TIMELINE.md day cards as Git-proven chronology.

## Conflicts with documentation

| Topic | Docs say | Git says | Case-study handling |
|---|---|---|---|
| ~10-day principal build | TIMELINE / CASE_STUDY (reported) | Two commits over ~4 calendar days on remote history | Keep as **reported estimate**; do not imply 10 Git commits |
| Playwright → Open API | CASE_STUDY migration story | Playwright in both commits; API only in working tree | Tell migration story; cite **code + upload artifact**, note API not yet in Git history |
| Day-by-day feature order | TIMELINE reconstructed | Not reconstructible from commits | Use product narrative stages, not fake commit scrubber dates |

## Cleanup

Remove the temporary worktree after audit (`git worktree remove`) so it does not linger beside the active product tree.
