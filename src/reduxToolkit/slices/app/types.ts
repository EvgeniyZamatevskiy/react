export type AppSliceInitialStateType = {
	isLoading: boolean
	isDisabled: boolean
	errorMessage: string
	counter: number
	items: SupplementedItemType[]
}

export type SupplementedItemType = ItemType & {
	isOnline: boolean
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
