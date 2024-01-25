import { FC, useMemo, useState } from 'react'
import { ExampleContext } from './ExampleContext'
import { ExampleContextProviderPropsType } from './types'

export const ExampleContextProvider: FC<ExampleContextProviderPropsType> = ({ children }) => {
  const [count, setCount] = useState(0)

  const value = useMemo(() => {
    return { count, setCount }
  }, [count])

  return <ExampleContext.Provider value={value}>{children}</ExampleContext.Provider>
}
