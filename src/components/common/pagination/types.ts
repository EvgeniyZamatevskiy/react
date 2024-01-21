export type PaginationPropsType = {
  totalCount: number;
  pageSize: number;
  currentPage: number;
  siblingCount?: number;
  onPageChange: (page: number) => void;
};
