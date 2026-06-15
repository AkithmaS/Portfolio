/**
 * Formats an ISO date string to a human-readable month + year.
 * e.g. "2024-03-15" → "Mar 2024"
 */
export function formatDate(isoString) {
  const date = new Date(isoString)
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
}

/**
 * Returns a display-friendly period string.
 * e.g. formatPeriod("2021-09", "Present") → "Sep 2021 – Present"
 */
export function formatPeriod(start, end = 'Present') {
  const startDate = new Date(start)
  const startStr = startDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
  return `${startStr} – ${end}`
}
