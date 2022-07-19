import { FC, useState } from 'react'
import { ReturnComponentType } from 'types'
import { ExampleContext } from './ExampleContext'

type ExampleContextProviderPropsType = {
	children: JSX.Element | JSX.Element[]
}

export const ExampleContextProvider: FC<ExampleContextProviderPropsType> = ({ children }): ReturnComponentType => {

	const [count, setCount] = useState<number>(0)

	return (
		<ExampleContext.Provider value={{
			count,
			setCount
		}}>
			{children}
		</ExampleContext.Provider>
	)
}
