import { ChangeEvent } from 'react'

export type UniversalTextareaPropsType = {
	value?: string
	onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void
	setValue?: (value: string) => void

	limitLength?: number
}
