import { DetailedHTMLProps, TextareaHTMLAttributes, Ref } from "react"

type DefaultTextareaPropsType = DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>

export type TextareaPropsType = DefaultTextareaPropsType & {
  setValue?: (value: string) => void
  onEnter?: () => void
  onEscape?: () => void
  variant?: string
  ref?: Ref<HTMLTextAreaElement>
}
