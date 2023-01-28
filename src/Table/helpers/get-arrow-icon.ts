type ArrowIconType = "all" | "down" | "up"

export const getArrowIcon = (isCurrentItem: boolean, isDescending: boolean, isAscending: boolean): ArrowIconType => {

  if (isCurrentItem && isDescending) {
    return "down";
  }

  if (isCurrentItem && isAscending) {
    return "up";
  }

  return "all";
};
