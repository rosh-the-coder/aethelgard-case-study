import { useEffect, useRef, useState } from 'react'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

/** Activates child nodes by IntersectionObserver. Falls back to index 0 when reduced motion. */
export function useInViewActive(count: number, enabled = true) {
  const reduced = usePrefersReducedMotion()
  const [active, setActive] = useState(0)
  const refs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    if (!enabled || reduced || count === 0) return

    const nodes = refs.current.filter(Boolean) as HTMLElement[]
    if (!nodes.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        const top = visible[0]
        if (!top) return
        const idx = nodes.indexOf(top.target as HTMLElement)
        if (idx >= 0) setActive(idx)
      },
      { rootMargin: '-35% 0px -45% 0px', threshold: [0.15, 0.4, 0.7] },
    )

    nodes.forEach((n) => observer.observe(n))
    return () => observer.disconnect()
  }, [count, enabled, reduced])

  const setRef = (index: number) => (el: HTMLElement | null) => {
    refs.current[index] = el
  }

  return { active, setActive, setRef, reduced }
}
