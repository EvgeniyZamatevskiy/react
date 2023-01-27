import type { FC } from "react";
import React from "react";
import arrow from "assets/arrow.svg";

type SortArrowsPropsType = {}

export const SortArrows: FC<SortArrowsPropsType> = () => {
  return (
    <div className="flex flex-col gap-[1px] mt-0.5 w-3">
      <img src={arrow} />
      <img src={arrow} className="scale-y-[-1]" />
    </div>
  );
};
