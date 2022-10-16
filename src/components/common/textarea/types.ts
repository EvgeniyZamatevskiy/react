import {ChangeEvent, FocusEvent, KeyboardEvent, Ref, SyntheticEvent} from "react"

export type TextareaPropsType = {
  isPrimary?: boolean
  isSecondary?: boolean
  className?: string
  type?: "text"
  placeholder?: string
  value?: string
  autoFocus?: boolean
  ref?: Ref<HTMLTextAreaElement>
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void
  onKeyDown?: (event: KeyboardEvent<HTMLTextAreaElement>) => void
  onBlur?: (event: FocusEvent<HTMLTextAreaElement>) => void
  onSelect?: (event: SyntheticEvent<HTMLTextAreaElement>) => void
  setValue?: (value: string) => void
  onEnter?: () => void
  onEscape?: () => void
}
