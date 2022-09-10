import {
	setErrorMessageAC,
	setIsLoadingAC,
	addItemAC,
	changeAnyValueAC,
	changeItemTitleAC,
	removeItemAC,
	setSupplementedItemsAC,
	toggleItemIsActiveAC,
	setCountAC,
	getCounterAC
} from '.'

export type AppReducerActionsType =
	SetIsLoadingActionType |
	SetErrorMessageActionType |
	AddItemActionType |
	ChangeAnyValueActionType |
	ChangeItemTitleActionType |
	RemoveItemActionType |
	SetSupplementedItemsActionType |
	ToggleItemIsActiveActionType |
	SetCountActionType |
	GetCounterActionType

export type SetIsLoadingActionType = ReturnType<typeof setIsLoadingAC>
export type SetErrorMessageActionType = ReturnType<typeof setErrorMessageAC>
export type AddItemActionType = ReturnType<typeof addItemAC>
export type ChangeAnyValueActionType = ReturnType<typeof changeAnyValueAC>
export type ChangeItemTitleActionType = ReturnType<typeof changeItemTitleAC>
export type RemoveItemActionType = ReturnType<typeof removeItemAC>
export type SetSupplementedItemsActionType = ReturnType<typeof setSupplementedItemsAC>
export type ToggleItemIsActiveActionType = ReturnType<typeof toggleItemIsActiveAC>
export type SetCountActionType = ReturnType<typeof setCountAC>
export type GetCounterActionType = ReturnType<typeof getCounterAC>
