/**
 * Smoothly scrolls to a section by its element id.
 * @param {string} id     - The target element's id (without #)
 * @param {number} offset - Pixels to offset from top (navbar height)
 */
export function scrollToSection(id, offset = 80) {
  const el = document.getElementById(id)
  if (!el) return

  const top = el.getBoundingClientRect().top + window.scrollY - offset
  window.scrollTo({ top, behavior: 'smooth' })
}
