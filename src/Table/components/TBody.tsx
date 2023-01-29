import type { FC } from "react";
import React from "react";
import { ItemType } from "App";
import { TD, Triangle } from "./TD";

type TBodyPropsType = {
  items: ItemType[]
  additionalTitleOne?: string
  additionalTitleTwo?: string
  additionalTitleThree?: string
}

export const TBody: FC<TBodyPropsType> = ({ items }) => {
  return (
    <tbody>
    {items.map((item) => {
      const {
        id,
        totalNft,
        collectionName,
        collectionIcon,
        compilationDescription1d,
        compilationDescription7d,
        compilationDescription30d,
        compilationDescriptionAll
      } = item;

      return (
        <tr key={id}>
          <TD collectionIcon={collectionIcon} primaryTitle={collectionName}
              secondaryTitle={totalNft} rightSecondTitle=" NFT" />
          <TD primaryTitle={compilationDescription1d} isIndicator
              rightPrimaryTitle="%" />
          <TD primaryTitle={compilationDescription7d} isIndicator
              rightPrimaryTitle="%" />
          <TD primaryTitle={compilationDescription30d} isIndicator
              rightPrimaryTitle="%" />
          <TD primaryTitle={compilationDescriptionAll} isIndicator
              rightPrimaryTitle="%" />
        </tr>
      );
    })}
    </tbody>
  );
};
