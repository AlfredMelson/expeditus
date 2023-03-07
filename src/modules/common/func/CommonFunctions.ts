export function CapitalizeTag(tagName: string) {
  if (typeof tagName !== 'string') return ''

  return tagName.charAt(0).toUpperCase() + tagName.slice(1)
}
