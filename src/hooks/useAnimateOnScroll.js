import { useEffect, useRef, useState } from 'react'

/**
 * Returns a ref and a boolean `isVisible`.
 * When the element enters the viewport, isVisible becomes true.
 *
 * @param {number} threshold - 0 to 1, fraction of element that must be visible
 */
export function useAnimateOnScroll(threshold = 0.15) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(el) // only animate once
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, isVisible }
}
