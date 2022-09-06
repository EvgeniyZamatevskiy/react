import {
	setErrorMessageAC,
	setIsLoadingAC,
	addItemAC,
	changeAnyValueAC,
	changeItemTitleAC,
	removeItemAC,
	setSupplementedItemsAC,
	toggleItemIsActiveAC
} from '.'

export type AppReducerActionsType =
	SetIsLoadingActionType |
	SetErrorMessageActionType |
	AddItemActionType |
	ChangeAnyValueActionType |
	ChangeItemTitleActionType |
	RemoveItemActionType |
	SetSupplementedItemsActionType |
	ToggleItemIsActiveActionType

export type SetIsLoadingActionType = ReturnType<typeof setIsLoadingAC>
export type SetErrorMessageActionType = ReturnType<typeof setErrorMessageAC>
export type AddItemActionType = ReturnType<typeof addItemAC>
export type ChangeAnyValueActionType = ReturnType<typeof changeAnyValueAC>
export type ChangeItemTitleActionType = ReturnType<typeof changeItemTitleAC>
export type RemoveItemActionType = ReturnType<typeof removeItemAC>
export type SetSupplementedItemsActionType = ReturnType<typeof setSupplementedItemsAC>
export type ToggleItemIsActiveActionType = ReturnType<typeof toggleItemIsActiveAC>

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
