import { SetStateType } from "App"

export type ExampleContextType = {
  count: number
  setCount: SetStateType<number>
}

export type ExampleContextProviderPropsType = {
  children: JSX.Element | JSX.Element[]
}
