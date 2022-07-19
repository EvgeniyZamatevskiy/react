import { createContext } from 'react'

export type ExampleContextType = {
	count: number
	setCount: (count: number) => void
}

export const ExampleContext = createContext<ExampleContextType>({} as ExampleContextType)
