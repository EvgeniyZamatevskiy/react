import { FC, Fragment, ReactElement } from "react";
import React from "react";
import { TD } from "./TD";
import { LeaderboardType } from "api/getLeaderBoard";

type TBodyPropsType = {
  items: LeaderboardType[]
  additionalTitleOne?: string
  additionalTitleTwo?: string
  additionalTitleThree?: string
}

export const TBody: FC<TBodyPropsType> = ({ items }) => {
  return (
    <tbody>
    {items.map((item) => {
      const { collection_name, value, rank, type, collection_address } = item;

      const columns: ReactElement[] = [
        <TD primaryTitle={collection_name} secondaryTitle={type} />,
        <TD primaryTitle={value} />,
        <TD primaryTitle={rank} />
      ];

      return (
        <tr key={collection_address}>
          {columns.map((column, index) => {
            return <Fragment key={index}>{column}</Fragment>;
          })}
        </tr>
      );
    })}
    </tbody>
  );
};
