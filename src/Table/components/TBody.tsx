import type { FC } from "react";
import React from "react";
import { ItemType } from "App";
import { TD } from "./TD";

type TBodyPropsType = {
  items: ItemType[]
  additionalTitleOne?: string
  additionalTitleTwo?: string
  additionalTitleThree?: string
}

export const TBody: FC<TBodyPropsType> =
  ({
     items,
     additionalTitleOne,
     additionalTitleTwo,
     additionalTitleThree
   }) => {
    return (
      <tbody>
      {items.map((item) => {
        const {
          id,
          changeEth,
          holdingsEth,
          currentFloorEth,
          previousFloorEth,
          currentFloorDollar,
          amountSpentEth,
          amountSpentDollar,
          previousFloorDollar,
          holdingsDollar,
          plDollar,
          plEth,
          totalNft,
          collectionName,
          changeDollar,
          collectionIcon
        } = item;

        return (
          <tr key={id}>
            <TD collectionIcon={collectionIcon} primaryTitle={collectionName}
                secondaryTitle={`${totalNft} ${additionalTitleThree}`} />
            <TD primaryTitle={`${previousFloorEth} ${additionalTitleOne}`}
                secondaryTitle={`${additionalTitleTwo}${previousFloorDollar}`} />
            <TD primaryTitle={`${currentFloorEth} ${additionalTitleOne}`}
                secondaryTitle={`${additionalTitleTwo}${currentFloorDollar}`} />
            <TD primaryTitle={`${changeEth} ${additionalTitleOne}`}
                secondaryTitle={`${additionalTitleTwo}${changeDollar}`} />
            <TD primaryTitle={`${amountSpentEth} ${additionalTitleOne}`}
                secondaryTitle={`${additionalTitleTwo}${amountSpentDollar}`} />
            <TD primaryTitle={`${holdingsEth} ${additionalTitleOne}`}
                secondaryTitle={`${additionalTitleTwo}${holdingsDollar}`} />
            <TD primaryTitle={`${plEth} ${additionalTitleOne}`} secondaryTitle={`${additionalTitleTwo}${plDollar}`} />
          </tr>
        );
      })}
      </tbody>
    );
  };
