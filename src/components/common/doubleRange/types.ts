export type DoubleRangePropsType = {
	min: number
	max: number
	minDefaultValue: number
	maxDefaultValue: number
	isDisabled?: boolean
	setMinValueMouseUp?: (min: number) => void
	setMaxValueMouseUp?: (max: number) => void
}