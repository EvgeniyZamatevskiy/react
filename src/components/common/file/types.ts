import { DetailedHTMLProps, InputHTMLAttributes } from "react"

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export type FilePropsType = Omit<DefaultInputPropsType, "type"> & {
  buttonClass?: string
  handleUpdatePhotoChange: (file: File) => void
  handleSetErrorMessage: (errorMessage: string) => void
}
