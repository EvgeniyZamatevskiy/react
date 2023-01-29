import clsx from "clsx";
import type { FC } from "react";
import React from "react";
import styled from "styled-components";

type TDPropsType = {
  primaryTitle: string | number
  secondaryTitle?: string | number
  collectionIcon?: string
  leftPrimaryTitle?: string
  rightPrimaryTitle?: string
  leftSecondTitle?: string
  rightSecondTitle?: string
  isIndicator?: boolean
}

export const Triangle = styled.div<{ isIndicatorPlus: boolean }>`
  width: 0;
  height: 0;
  border: 0 solid transparent;
  border-right-width: 4.5px;
  border-left-width: 4.5px;
  border-bottom: ${({ isIndicatorPlus }) => isIndicatorPlus ? "7px solid #31BA3F" : "7px solid red"};
  margin-right: 3px;
  transform: ${({ isIndicatorPlus }) => !isIndicatorPlus && "scale(-1)"};
`;

export const TD: FC<TDPropsType> =
  ({
     primaryTitle,
     secondaryTitle,
     collectionIcon,
     leftPrimaryTitle,
     rightPrimaryTitle,
     leftSecondTitle,
     rightSecondTitle,
     isIndicator = false
   }) => {

    const isIndicatorPlus = isIndicator && !String(primaryTitle).startsWith("-");
    const currentPrimaryTitle = String(primaryTitle).startsWith("-") ? String(primaryTitle).slice(1) : primaryTitle;

    return (
      <td
        className="pt-[10px] pb-[10px] pr-[30px] pl-[30px] text-[14px] leading-[21px] border-t border-[#E0E0E0]">
        <div className="flex">
          {collectionIcon && (
            <img className="w-[40px] h-[40px] rounded-[50%] mr-[18px]" src={collectionIcon} alt="no cover" />
          )}
          <div className="text-[14px]">

            <div className={clsx("flex items-center font-medium whitespace-nowrap", {
              "text-emerald-500": isIndicator && isIndicatorPlus,
              "text-red-500": isIndicator && !isIndicatorPlus
            })}>
              {isIndicator ? (
                <Triangle isIndicatorPlus={isIndicatorPlus} />
              ) : (
                leftPrimaryTitle
              )}
              <div>
                {currentPrimaryTitle}
              </div>
              {rightPrimaryTitle}
            </div>

            <div className="flex items-center text-[#828282] whitespace-nowrap">
              {leftSecondTitle}
              {secondaryTitle}
              {rightSecondTitle}
            </div>

          </div>
        </div>
      </td>
    );
  };
