import { ReactNode } from 'react'
import { SetStateType } from 'types'

export type ExampleContextType = {
  count: number
  setCount: SetStateType<number>
}

export type ExampleContextProviderPropsType = {
  children: ReactNode
}
