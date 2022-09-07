import { Nullable } from 'types'

export type AppReducerInitStateType = {
	isLoading: boolean
	errorMessage: Nullable<string>
	items: SupplementedItemType[]
}

export type ItemType = {
	id: number
	title: string
	isActive: boolean
	filter: FilterValue
}

export enum FilterValue {
	ALL = 'all',
	ACTIVE = 'active',
	COMPLETED = 'completed'
}


export type SupplementedItemType = ItemType & {
	isDisabled: boolean
}
