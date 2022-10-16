import {ChangeEvent} from "react"

export type SelectPropsType = {
  isPrimary?: boolean
  isSecondary?: boolean
  className?: string
  optionClassName?: string
  options: string[]
  value: string
  disabled?: boolean
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void
  setValue?: (value: string) => void
}
