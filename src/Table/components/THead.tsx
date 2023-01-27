import type { FC } from "react";
import React from "react";
import { SortArrows } from "Table/components/SortArrows";
import { CategoryType } from "App";

type THeadPropsType = {
  categories: CategoryType[]
}

export const THead: FC<THeadPropsType> = ({ categories }) => {
  return (
    <thead>
    <tr>
      {categories.map(({ id, title }) => {
        return (
          <th key={id}
              className="pt-[19px] pb-[19px] pr-[30px] pl-[30px] text-[12px] text-[#828282] font-medium text-left cursor-pointer">
            <div className="flex items-center whitespace-nowrap">
              <span className="mr-[4px]">{title}</span>
              <SortArrows />
            </div>
          </th>
        );
      })}
    </tr>
    </thead>
  );
};
