import type { FC } from "react";
import React from "react";
import { ItemType } from "App";
import { TD } from "./TD";

type TBodyPropsType = {
  items: ItemType[]
}

export const TBody: FC<TBodyPropsType> = ({ items }) => {
  return (
    <tbody>
    {items.map((item) => {
      const { id, previousFloor, currentFloor, collection, change, pl, holdings, amountSpent } = item;

      return (
        <tr key={id}>
          <TD isShowIcon primaryTitle={collection.name} secondaryTitle={collection.totalNft} />
          <TD primaryTitle={previousFloor.eth} secondaryTitle={previousFloor.dollar} />
          <TD primaryTitle={currentFloor.eth} secondaryTitle={currentFloor.dollar} />
          <TD primaryTitle={change.eth} secondaryTitle={change.dollar} />
          <TD primaryTitle={amountSpent.eth} secondaryTitle={amountSpent.dollar} />
          <TD primaryTitle={holdings.eth} secondaryTitle={holdings.dollar} />
          <TD primaryTitle={pl.eth} secondaryTitle={pl.dollar} />
        </tr>
      );
    })}
    </tbody>
  );
};
