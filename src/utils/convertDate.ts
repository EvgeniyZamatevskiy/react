export const convertDate = (date: Date): string => {
  const newDate = new Date(date)
  const convertedDate = `${newDate.toLocaleDateString()} ${newDate.toLocaleTimeString()}`
  return convertedDate
}
