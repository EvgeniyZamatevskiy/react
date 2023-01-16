import { createContext, useContext } from 'react'
import { ExampleContextType } from './types'

export const ExampleContext = createContext<ExampleContextType>({} as ExampleContextType)

export const useExampleContext = () => useContext(ExampleContext)
