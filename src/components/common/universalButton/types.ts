import { ReactNode } from 'react'

export type UniversalButtonPropsType = {
	isPrimary?: boolean
	isSecondary?: boolean

	className?: string
	children: ReactNode
	onClick?: () => void
	disabled?: boolean
	type?: 'button' | 'submit' | 'reset'
}
