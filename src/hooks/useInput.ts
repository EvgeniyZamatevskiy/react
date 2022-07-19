import { ChangeEvent, useCallback, useMemo, useState } from 'react'
import { EMPTY_STRING } from 'constants/base'

type UseInputReturnType = {
	value: string
	handleValueChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export const useInput = (): UseInputReturnType => {

	const [value, setValue] = useState<string>(EMPTY_STRING)

	const handleSetValue = (newValue: string): void => setValue(newValue)

	const handleValueChange = useCallback((event: ChangeEvent<HTMLInputElement>): void => {
		handleSetValue(event.currentTarget.value)
	}, [handleSetValue])

	return useMemo(() => {
		return { value, handleValueChange }
	}, [value, handleValueChange])
}
