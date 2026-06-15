import { useState, useEffect } from 'react'

/**
 * Basic theme hook — currently defaults to dark.
 * Extend this to support light mode by toggling a 'light' class on <html>.
 */
export function useTheme() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem('portfolio-theme') || 'dark'
  )

  useEffect(() => {
    const root = document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(theme)
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  const toggleTheme = () =>
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))

  return { theme, toggleTheme }
}
