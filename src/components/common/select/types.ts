import { DetailedHTMLProps, SelectHTMLAttributes } from "react"

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

export type SelectPropsType = DefaultSelectPropsType & {
  options: any[]
  setOption?: (option: any) => void
  optionClassName?: string
  variant?: string
}
