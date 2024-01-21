// Получить слово с тремя точками в конце, если его длинна больше максимальной длинны
export const truncateBySpace = (text: string, maxLength: number): string => {
  const trimmedText = text.trim();

  return trimmedText.length <= maxLength
    ? trimmedText
    : trimmedText.slice(0, maxLength).trimEnd() + "...";
};
// console.log(truncateBySpace("Привет", 6)); // "Привет"
// console.log(truncateBySpace("Привет", 5)); // "Приве..."
