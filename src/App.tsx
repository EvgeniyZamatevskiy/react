import React, { FC } from "react";
import { Table } from "Table/Table";

export type CategoryType = {
  id: number
  title: string
}

type ValueType = {
  eth: string
  dollar: string
}

export type ItemType = {
  id: number
  collection: { name: string, totalNft: string }
  previousFloor: ValueType
  currentFloor: ValueType
  change: ValueType
  amountSpent: ValueType
  holdings: ValueType
  pl: ValueType
}

export const App: FC = () => {

  const items: ItemType[] = [
    {
      id: 1,
      collection: { name: "Minimal Grow", totalNft: "1 NFT" },
      previousFloor: { eth: "0,32 ETH", dollar: "$50,58" },
      currentFloor: { eth: "0,32 ETH", dollar: "$50,58" },
      change: { eth: "0,0025 ETH", dollar: "$4,31" },
      amountSpent: { eth: "0 ETH", dollar: "$0" },
      holdings: { eth: "0,32 ETH", dollar: "$50,580" },
      pl: { eth: "0,0025 ETH", dollar: "$4,31" }
    },
    {
      id: 2,
      collection: { name: "Minimal Grow 2", totalNft: "1 NFT" }, //////////
      previousFloor: { eth: "2 ETH", dollar: "$2" },
      currentFloor: { eth: "2 ETH", dollar: "$2" },
      change: { eth: "0,0025 ETH", dollar: "$4,31" },
      amountSpent: { eth: "0 ETH", dollar: "$0" },
      holdings: { eth: "0,32 ETH", dollar: "$50,580" },
      pl: { eth: "0,0025 ETH", dollar: "$4,31" }
    },
    {
      id: 3,
      collection: { name: "Minimal Grow 3", totalNft: "1 NFT" },
      previousFloor: { eth: "3 ETH", dollar: "$3" },
      currentFloor: { eth: "3 ETH", dollar: "$3" },
      change: { eth: "0,0025 ETH", dollar: "$4,31" },
      amountSpent: { eth: "0 ETH", dollar: "$0" },
      holdings: { eth: "0,32 ETH", dollar: "$50,580" },
      pl: { eth: "0,0025 ETH", dollar: "$4,31" }
    },
    {
      id: 4,
      collection: { name: "Minimal Grow 3", totalNft: "1 NFT" },
      previousFloor: { eth: "3 ETH", dollar: "$3" },
      currentFloor: { eth: "3 ETH", dollar: "$3" },
      change: { eth: "0,0025 ETH", dollar: "$4,31" },
      amountSpent: { eth: "0 ETH", dollar: "$0" },
      holdings: { eth: "0,32 ETH", dollar: "$50,580" },
      pl: { eth: "0,0025 ETH", dollar: "$4,31" }
    },
    {
      id: 5,
      collection: { name: "Minimal Grow 3", totalNft: "1 NFT" },
      previousFloor: { eth: "3 ETH", dollar: "$3" },
      currentFloor: { eth: "3 ETH", dollar: "$3" },
      change: { eth: "0,0025 ETH", dollar: "$4,31" },
      amountSpent: { eth: "0 ETH", dollar: "$0" },
      holdings: { eth: "0,32 ETH", dollar: "$50,580" },
      pl: { eth: "0,0025 ETH", dollar: "$4,31" }
    },
    {
      id: 6,
      collection: { name: "Minimal Grow 3", totalNft: "1 NFT" },
      previousFloor: { eth: "3 ETH", dollar: "$3" },
      currentFloor: { eth: "3 ETH", dollar: "$3" },
      change: { eth: "0,0025 ETH", dollar: "$4,31" },
      amountSpent: { eth: "0 ETH", dollar: "$0" },
      holdings: { eth: "0,32 ETH", dollar: "$50,580" },
      pl: { eth: "0,0025 ETH", dollar: "$4,31" }
    },
    {
      id: 7,
      collection: { name: "Minimal Grow 3", totalNft: "1 NFT" },
      previousFloor: { eth: "3 ETH", dollar: "$3" },
      currentFloor: { eth: "3 ETH", dollar: "$3" },
      change: { eth: "0,0025 ETH", dollar: "$4,31" },
      amountSpent: { eth: "0 ETH", dollar: "$0" },
      holdings: { eth: "0,32 ETH", dollar: "$50,580" },
      pl: { eth: "0,0025 ETH", dollar: "$4,31" }
    }
  ];

  const categories: CategoryType[] = [
    { id: 1, title: "Collection" },
    { id: 2, title: "Previous Floor" },
    { id: 3, title: "Current Floor" },
    { id: 4, title: "Change" },
    { id: 5, title: "Amount spent" },
    { id: 6, title: "Holdings" },
    { id: 7, title: "P&L" }
  ];

  return (
    <div className="h-[100vh] flex items-center justify-center">


      <div
        className="overflow-x-scroll xl:overflow-x-hidden bg-[#fff] rounded-[20px] pt-[20px] pr-[24px] pl-[24px] pb-[29px]">
        <h2 className="font-bold text-[20px] text-[#2C2C2C] mb-[12px]">Collection</h2>
        <Table categories={categories} items={items} />
      </div>


    </div>
  );
};
