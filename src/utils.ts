// 1. Получить число с красивыми пробелами, для лучшей читаемости
// Возврат: 1000 => "1 000"
// Использовалось: 1

// 2. Получить слово с тремя точками в конце, если его длинна больше максимальной длинны
// Возврат: "Привет" => "Приве..."
// Использовалось: 0

// Получить число с красивыми пробелами, для лучшей читаемости
export const getIndentedValue = (value: number): string => {
  return value
    .toString()
    .split("")
    .reverse()
    .map((item, index) => index % 3 !== 2 ? item : ` ${item}`)
    .reverse()
    .join("")
    .trim();
};
// console.log(getIndentedValue(1000)); // "1 000"
// console.log(getIndentedValue(10000)); // "10 000"

// Получить слово с тремя точками в конце, если его длинна больше максимальной длинны
export const truncateBySpace = (text: string, maxLength: number): string => {
  const trimmedText = text.trim();
  return trimmedText.length <= maxLength ? trimmedText : trimmedText.slice(0, maxLength).trimEnd() + "...";
};
// console.log(truncateBySpace("Привет", 6)); // "Привет"
// console.log(truncateBySpace("Привет", 5)); // "Приве..."
