import { FC } from "react";
import React from "react";
import { CategoryType, ItemType } from "App";
import { THead } from "Table/components/THead";
import { TBody } from "./components/TBody";
import { SortStatusType } from "hooks/useSortedItems";

type TablePropsType = {
  categories: CategoryType[]
  items: ItemType[]
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
        <TBody items={items} additionalTitleOne="ETH" additionalTitleTwo="$" additionalTitleThree="NFT" />
      </table>
    );
  };
