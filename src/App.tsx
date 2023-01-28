import React, { FC, useState } from "react";
import { Table } from "Table/Table";
import { useSortedItems } from "hooks";
import { SortStatusType } from "hooks/useSortedItems";

export type CategoryType = {
  id: number
  title: string
  sortValue: string
}

export type ItemType = {
  id: number
  collectionName: string
  collectionIcon: string
  totalNft: number
  previousFloorEth: number
  previousFloorDollar: number
  currentFloorEth: number
  currentFloorDollar: number
  changeEth: number
  changeDollar: number
  amountSpentEth: number
  amountSpentDollar: number
  holdingsEth: number
  holdingsDollar: number
  plEth: number
  plDollar: number
}

export const App: FC = () => {

  const [items, setItems] = useState<ItemType[]>([
    {
      id: 1,
      collectionName: "Haunted Space Genesis Pass Official",
      collectionIcon: "https://static.conft.app/aHR0cHM6Ly9hcGkuY29uZnQuYXBwL3VwbG9hZHMvY29sbGVjdGlvbi9pbWFnZS8yMjgvJUQwJUJCJUQwJUIwMi5qcGc=",
      totalNft: 13,
      previousFloorEth: 0.32,
      previousFloorDollar: 12,
      currentFloorEth: 0.22,
      currentFloorDollar: 10.58,
      changeEth: 32,
      changeDollar: 13.3,
      amountSpentEth: 0.31,
      amountSpentDollar: 2,
      holdingsEth: 0.32,
      holdingsDollar: 2.32,
      plEth: 1.251,
      plDollar: 32
    },
    {
      id: 2,
      collectionName: "Creepz Genesis",
      collectionIcon: "https://static.conft.app/aHR0cHM6Ly9hcGkuY29uZnQuYXBwL3VwbG9hZHMvY29sbGVjdGlvbi9pbWFnZS8zNS8lRDElODElRDAlQkElRDElODMlRDAlQjclRDAlQjclRDElOEZfJUQwJUJCJUQwJUJBJUQwJUIzJUQwJUJGLnBuZw==",
      totalNft: 23,
      previousFloorEth: 1,
      previousFloorDollar: 435.58,
      currentFloorEth: 324,
      currentFloorDollar: 431.58,
      changeEth: 421,
      changeDollar: 435,
      amountSpentEth: 3,
      amountSpentDollar: 421,
      holdingsEth: 421,
      holdingsDollar: 421,
      plEth: 789,
      plDollar: 998
    },
    {
      id: 3,
      collectionName: "Llamaverse",
      collectionIcon: "https://static.conft.app/aHR0cHM6Ly9hcGkuY29uZnQuYXBwL3VwbG9hZHMvY29sbGVjdGlvbi9pbWFnZS8zMDcvZkxmc3NZaDdfNDAweDQwMC5qcGc=",
      totalNft: 12,
      previousFloorEth: 42,
      previousFloorDollar: 12.58,
      currentFloorEth: 53,
      currentFloorDollar: 33.58,
      changeEth: 53.23,
      changeDollar: 14.31,
      amountSpentEth: 31,
      amountSpentDollar: 30,
      holdingsEth: 66.34,
      holdingsDollar: 20.50,
      plEth: 51.51,
      plDollar: 44.31
    }
  ]);
  const [sortStatus, setSortStatus] = useState<SortStatusType>("default");
  const [sortValue, setSortValue] = useState("");
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(-1);

  const sortedItems = useSortedItems<ItemType>(items, sortValue, sortStatus);

  const categories: CategoryType[] = [
    { id: 1, title: "Collection", sortValue: "collectionName" },
    { id: 2, title: "Previous Floor", sortValue: "previousFloorEth" },
    { id: 3, title: "Current Floor", sortValue: "currentFloorEth" },
    { id: 4, title: "Change", sortValue: "changeEth" },
    { id: 5, title: "Amount spent", sortValue: "amountSpentEth" },
    { id: 6, title: "Holdings", sortValue: "holdingsEth" },
    { id: 7, title: "P&L", sortValue: "plEth" }
  ];

  const handleCategoryClick = (value: string, index: number) => {
    setSortValue(value);
    setCurrentCategoryIndex(index);

    if (sortStatus === "descending" && sortValue === value) {
      setSortStatus("ascending");
    } else {
      setSortStatus("descending");
    }
  };

  return (
    <div className="h-[100vh] flex items-center justify-center">

      <div
        className="overflow-x-scroll xl:overflow-x-hidden bg-[#fff] rounded-[20px] pt-[20px] pr-[24px] pl-[24px] pb-[29px]">
        <h2 className="font-bold text-[20px] text-[#2C2C2C] mb-[12px]">Collections</h2>
        <Table
          categories={categories}
          items={sortedItems}
          handleCategoryClick={handleCategoryClick}
          sortStatus={sortStatus}
          currentCategoryIndex={currentCategoryIndex}
        />
      </div>

    </div>
  );
};
