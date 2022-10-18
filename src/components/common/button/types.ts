import {ReactNode} from "react"

export type ButtonPropsType = {
  isPrimary?: boolean
  isSecondary?: boolean
  onMouseEnter?: () => void
  onMouseLeave?: () => void
  children: ReactNode
  className?: string
  onClick?: () => void
  disabled?: boolean
  style?: {}
  type?: "button" | "submit" | "reset"
}
