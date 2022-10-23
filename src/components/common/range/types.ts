import { DetailedHTMLProps, InputHTMLAttributes } from "react"

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export type RangePropsType = Omit<DefaultInputPropsType, "type"> & {
  setValue?: (value: number) => void
  variant?: string
  setCurrentValue?: (value: number) => void
}
