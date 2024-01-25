import { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, ReactNode } from 'react'
import { SetStateType } from 'types'

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export type FilePropsType = DefaultInputPropsType & {
  children: ReactNode
  className?: string
  setImage?: SetStateType<string>
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}
