import {ReactNode} from "react"

export type ButtonPropsType = {
  isPrimary?: boolean
  isSecondary?: boolean

  children: ReactNode
  className?: string
  onClick?: () => void
  disabled?: boolean
  type?: "button" | "submit" | "reset"
}
