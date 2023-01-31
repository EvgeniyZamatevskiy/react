import { FC } from "react";
import React from "react";
import { CategoryType } from "App";
import { THead } from "Table/components/THead";
import { TBody } from "./components/TBody";
import { SortStatusType } from "hooks/useSortedItems";
import { LeaderboardType } from "api/getLeaderBoard";

type TablePropsType = {
  categories: CategoryType[]
  items: LeaderboardType[]
  handleCategoryClick: (sortValue: string, index: number) => void
  sortStatus: SortStatusType
  currentCategoryIndex: number
}

export const Table: FC<TablePropsType> =
  ({
     categories,
     items,
     handleCategoryClick,
     sortStatus,
     currentCategoryIndex
   }) => {

    return (
      <table className="w-full border-none">
        <THead
          categories={categories}
          handleCategoryClick={handleCategoryClick}
          sortStatus={sortStatus}
          currentCategoryIndex={currentCategoryIndex}
        />
        <TBody items={items} />
      </table>
    );
  };
