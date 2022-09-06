import { ChangeEvent } from 'react'

export type UniversalRadioPropsType = {
	isPrimary?: boolean
	isSecondary?: boolean
	className?: string
	labelClassName?: string
	options: string[]
	name: string
	value: string
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void
	setValue?: (option: string) => void
	setIndex?: (index: number) => void
}
