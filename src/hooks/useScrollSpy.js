import { useState, useEffect } from 'react'

/**
 * Tracks which section is currently in view based on scroll position.
 * Returns the id of the active section.
 *
 * @param {string[]} sectionIds - Array of section element ids to observe
 * @param {number}   offset     - Pixel offset from top (should match navbar height)
 */
export function useScrollSpy(sectionIds = [], offset = 80) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || '')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: `-${offset}px 0px -60% 0px`,
        threshold: 0,
      }
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [sectionIds, offset])

  return activeSection
}
