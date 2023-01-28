import type { FC } from "react";
import React from "react";

type TDPropsType = {
  primaryTitle: string | number
  secondaryTitle: string | number
  collectionIcon?: string
}

export const TD: FC<TDPropsType> = ({ primaryTitle, secondaryTitle, collectionIcon }) => {
  return (
    <td
      className="pt-[10px] pb-[10px] pr-[30px] pl-[30px] text-[14px] leading-[21px] border-t border-[#E0E0E0]">
      <div className="flex">
        {collectionIcon && (
          <img className="w-[40px] h-[40px] rounded-[50%] mr-[18px]" src={collectionIcon} alt="no cover" />
        )}
        <div className="text-[14px]">
          <div className="text-[#2C2C2C] font-medium whitespace-nowrap">{primaryTitle}</div>
          <div className="text-[#828282] whitespace-nowrap">{secondaryTitle}</div>
        </div>
      </div>
    </td>
  );
};
