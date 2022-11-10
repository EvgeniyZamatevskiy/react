import { createContext } from "react"
import { ExampleContextType } from "./types"

export const ExampleContext = createContext<ExampleContextType>({} as ExampleContextType)
