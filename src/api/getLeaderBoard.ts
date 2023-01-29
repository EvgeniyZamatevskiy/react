import { request } from "api/request";

export type IntervalType = "one_day" | "seven_days" | "thirty_days" | "all_time"
export type PageSizeType = 50 | 100 | 500 | 1000
export type RankingMetricType = "eth_volume" | "sales_count"


export type LeaderBoardDataType = {
  ranking_metric: RankingMetricType
  interval: IntervalType
  page?: number
  page_size?: PageSizeType
}

export type LeaderboardType = {
  collection_address: string
  collection_name: string
  rank: number
  symbol: string
  type: string
  value: number
}

type LeaderBoardRequestType = {
  response: {
    interval: IntervalType
    leaderboard: LeaderboardType[]
    page: number
    ranking_metric: RankingMetricType
    total_items: number
    total_pages: number
  }
  status: number
}


export const getLeaderBoard = (leaderBoardData: LeaderBoardDataType) => {
  return request<LeaderBoardRequestType>(
    "https://api.prod.gallop.run/v1/analytics/eth/getLeaderBoard",
    "POST",
    leaderBoardData,
    "O3APFSF03QI1LNATYZBCNPQL6937PVNS"
  );
};
