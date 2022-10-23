export type DoubleRangePropsType = {
  min: number
  max: number
  onChange?: ({min, max}: { min: number, max: number }) => void
  setCurrentMinValue?: (minValue: number) => void
  setCurrentMaxValue?: (maxValue: number) => void
}
