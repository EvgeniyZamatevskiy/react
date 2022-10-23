import { DetailedHTMLProps, InputHTMLAttributes } from "react"

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export type UniversalRadioPropsType = DefaultRadioPropsType & {
  labelClassName?: string
  spanClassName?: string
  variant?: string
  options: any[]
  setOption?: (option: any) => void
}
