import {ChangeEvent, ReactNode} from "react"

export type CheckboxPropsType = {
  isPrimary?: boolean
  isSecondary?: boolean
  className?: string
  labelClassName?: string
  spanClassName?: string
  children?: ReactNode
  checked?: boolean
  setChecked?: (checked: boolean) => void
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}
