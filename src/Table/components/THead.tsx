import type { FC } from "react";
import React from "react";
import { Arrows } from "Table/components/Arrows";
import { CategoryType } from "App";
import { SortStatusType } from "hooks/useSortedItems";

type THeadPropsType = {
  categories: CategoryType[]
  handleCategoryClick: (sortValue: string, index: number) => void
  sortStatus: SortStatusType
  currentCategoryIndex: number
}

export const THead: FC<THeadPropsType> =
  ({
     categories,
     handleCategoryClick,
     sortStatus,
     currentCategoryIndex
   }) => {

    return (
      <thead>
      <tr>
        {categories.map(({ id, title, sortValue }, index) => {
          return (
            <th key={id}
                className="pt-[19px] pb-[19px] pr-[30px] pl-[30px] text-[12px] text-[#828282] font-medium text-left cursor-pointer"
                onClick={() => handleCategoryClick(sortValue, index)}
            >
              <div className="flex items-center whitespace-nowrap">
                <span className="mr-[4px]">{title}</span>
                <Arrows sortStatus={sortStatus} isCurrentItem={currentCategoryIndex === index} />
              </div>
            </th>
          );
        })}
      </tr>
      </thead>
    );
  };
