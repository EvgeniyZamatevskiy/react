import { FC } from "react";
import React from "react";
import { CategoryType, ItemType } from "App";
import { THead } from "Table/components/THead";
import { TBody } from "./components/TBody";

type TablePropsType = {
  categories: CategoryType[]
  items: ItemType[]
}

export const Table: FC<TablePropsType> = ({ categories, items }) => {
  return (
    <table className="w-full border-none">
      <THead categories={categories} />
      <TBody items={items} />
    </table>
  );
};
