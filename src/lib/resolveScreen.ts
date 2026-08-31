/**
 * Auto-resolving figure sources.
 * Drop a real capture into public/assets/screens/ using the basename
 * (e.g. dashboard-overview.webp). First matching extension wins.
 */

const EXTS = ['webp', 'png', 'jpg', 'jpeg', 'svg'] as const

const cache = new Map<string, string | null>()

function probe(url: string): Promise<boolean> {
  return new Promise((resolve) => {
    const img = new Image()
    img.onload = () => resolve(true)
    img.onerror = () => resolve(false)
    img.src = url
  })
}

/** Resolve first existing asset for a screen basename (no extension). */
export async function resolveScreenSrc(basename: string): Promise<string | null> {
  if (cache.has(basename)) return cache.get(basename) ?? null
  for (const ext of EXTS) {
    const url = `./assets/screens/${basename}.${ext}`
    if (await probe(url)) {
      cache.set(basename, url)
      return url
    }
  }
  cache.set(basename, null)
  return null
}

/** Map figure filename → screen basename for auto-resolve. */
export function screenBasenameFromFilename(filename: string): string {
  return filename.replace(/\.(webp|png|jpg|jpeg|svg)$/i, '')
}
