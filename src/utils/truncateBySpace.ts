export const truncateBySpace = (text: string, maxLength: number): string => {
  const trimmedText = text.trim()

  return trimmedText.length <= maxLength ? trimmedText : `${trimmedText.slice(0, maxLength).trimEnd()}...`
}
