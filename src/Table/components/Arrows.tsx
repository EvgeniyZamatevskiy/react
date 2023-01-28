import type { FC } from "react";
import React from "react";
import arrow from "assets/arrow.svg";
import { SortStatusType } from "hooks/useSortedItems";
import { getArrowIcon } from "Table/helpers/get-arrow-icon";

type ArrowsPropsType = {
  sortStatus: SortStatusType
  isCurrentItem: boolean
}

export const Arrows: FC<ArrowsPropsType> = ({ sortStatus, isCurrentItem }) => {

  const isDescending = sortStatus === "descending";
  const isAscending = sortStatus === "ascending";

  const arrowIcon = getArrowIcon(isCurrentItem, isDescending, isAscending);

  return (
    <div className="flex flex-col gap-[1px] mt-0.5 w-3">
      {(arrowIcon === "up" || arrowIcon === "all") && <img src={arrow} />}
      {(arrowIcon === "down" || arrowIcon === "all") && <img src={arrow} className="scale-y-[-1]" />}
    </div>
  );
};
