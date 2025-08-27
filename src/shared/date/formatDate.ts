export function formatDate(isoDate?: string | null, format: string = 'DD.MM.YYYY'): string | null {
  if (!isoDate) return null

  const date = new Date(isoDate)
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getFullYear()

  return format
    .replace(/DD/g, day)
    .replace(/MM/g, month)
    .replace(/YYYY/g, String(year))
}

export function formatDateToISO(date: string | Date | number | null | undefined): string | null {
  if (!date) return null  
  const d = typeof date === 'string' || typeof date === 'number' ? new Date(date) : date
  if (isNaN(d.getTime())) return null
  return d.toISOString()
}
