import React, { FC, useEffect, useState } from "react";
import { Table } from "Table/Table";
import { useSortedItems } from "hooks";
import { SortStatusType } from "hooks/useSortedItems";
import { getLeaderBoard, LeaderBoardDataType, LeaderboardType } from "api/getLeaderBoard";

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
  compilationDescription1d: number | string
  compilationDescription7d: number | string
  compilationDescription30d: number | string
  compilationDescriptionAll: number | string
  ethVolume1d: number
}

const data: ItemType[] = [
  {
    id: 1,
    collectionName: "Haunted Space Genesis Pass Official",
    collectionIcon: "https://static.conft.app/aHR0cHM6Ly9hcGkuY29uZnQuYXBwL3VwbG9hZHMvY29sbGVjdGlvbi9pbWFnZS8yMjgvJUQwJUJCJUQwJUIwMi5qcGc=",
    totalNft: 13,
    compilationDescription1d: "<span class=\"text-red-500\">-61%</span>",
    compilationDescription7d: "<span class=\"text-emerald-500\">+11%</span>",
    compilationDescription30d: "<span class=\"text-emerald-500\">+41%</span>",
    compilationDescriptionAll: "<span class=\"text-red-500\">-31%</span>",
    ethVolume1d: 0
  },
  {
    id: 2,
    collectionName: "Creepz Genesis",
    collectionIcon: "https://static.conft.app/aHR0cHM6Ly9hcGkuY29uZnQuYXBwL3VwbG9hZHMvY29sbGVjdGlvbi9pbWFnZS8zNS8lRDElODElRDAlQkElRDElODMlRDAlQjclRDAlQjclRDElOEZfJUQwJUJCJUQwJUJBJUQwJUIzJUQwJUJGLnBuZw==",
    totalNft: 23,
    compilationDescription1d: "<span class=\"text-emerald-500\">+51%</span>",
    compilationDescription7d: "<span class=\"text-emerald-500\">+41%</span>",
    compilationDescription30d: "<span class=\"text-red-500\">-64%</span>",
    compilationDescriptionAll: "<span class=\"text-emerald-500\">+234%</span>",
    ethVolume1d: 0
  },
  {
    id: 3,
    collectionName: "Llamaverse",
    collectionIcon: "https://static.conft.app/aHR0cHM6Ly9hcGkuY29uZnQuYXBwL3VwbG9hZHMvY29sbGVjdGlvbi9pbWFnZS8zMDcvZkxmc3NZaDdfNDAweDQwMC5qcGc=",
    totalNft: 12,
    compilationDescription1d: "<span class=\"text-emerald-500\">+42%</span>",
    compilationDescription7d: "<span class=\"text-red-500\">-67%</span>",
    compilationDescription30d: "<span class=\"text-emerald-500\">+63%</span>",
    compilationDescriptionAll: "<span class=\"text-red-500\">-87%</span>",
    ethVolume1d: 0
  }
];

export const App: FC = () => {

  const [leaderBoard, setLeaderBoard] = useState<LeaderboardType[]>([]);
  const [items, setItems] = useState<ItemType[]>([]);
  const [sortStatus, setSortStatus] = useState<SortStatusType>("default");
  const [sortValue, setSortValue] = useState("");
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(-1);

  const sortedItems = useSortedItems<ItemType>(items, sortValue, sortStatus);

  const categories: CategoryType[] = [
    { id: 1, title: "Collection", sortValue: "collectionName" },
    { id: 2, title: "1d", sortValue: "compilationDescription1d" },
    { id: 3, title: "7d", sortValue: "compilationDescription7d" },
    { id: 4, title: "30d", sortValue: "compilationDescription30d" },
    { id: 5, title: "All", sortValue: "compilationDescriptionAll" }
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

  useEffect(() => {
    const items = data.map((item) => {

      const compilationDescription1d = Number(String(item.compilationDescription1d).replace(/[^-+0-9]/gim, "").slice(5));
      const compilationDescription7d = Number(String(item.compilationDescription7d).replace(/[^-+0-9]/gim, "").slice(5));
      const compilationDescription30d = Number(String(item.compilationDescription30d).replace(/[^-+0-9]/gim, "").slice(5));
      const compilationDescriptionAll = Number(String(item.compilationDescriptionAll).replace(/[^-+0-9]/gim, "").slice(5));

      return {
        ...item,
        compilationDescription1d,
        compilationDescription7d,
        compilationDescription30d,
        compilationDescriptionAll
      };
    });

    setItems(items);
  }, []);

  useEffect(() => {

    const leaderBoardData: LeaderBoardDataType = { ranking_metric: "eth_volume", interval: "one_day", page_size: 50 };

    getLeaderBoard(leaderBoardData)
      .then(({ response }) => {
        // @ts-ignore

        const newArr = response.leaderboard.map((leaderboard) => {

          return {
            ...leaderboard,
            ethVolume1d: leaderboard.value
          };
        });

        console.log(newArr);

        // setLeaderBoard();
      });
  }, []);

  console.log(leaderBoard);

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
