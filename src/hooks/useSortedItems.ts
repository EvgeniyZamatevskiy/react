import { useMemo } from "react";

export type SortStatusType = "default" | "descending" | "ascending"

// 'descending' - по убыванию
// 'ascending' - по возрастанию

export const useSortedItems = <T>(items: T[], sortValue: string, sortStatus: SortStatusType): T[] => {

  const sortedItems = useMemo(() => {

    if (sortValue) {
      return [...items].sort((a, b) => {

        const sortA = a[sortValue as keyof T];
        const sortB = b[sortValue as keyof T];

        return sortA > sortB ? -1 : sortA < sortB ? 1 : 0;
      });
    } else {
      return items;
    }

  }, [items, sortValue, sortStatus]);

  return sortStatus === "descending" ? sortedItems : sortStatus === "ascending" ? sortedItems.reverse() : items;
};
