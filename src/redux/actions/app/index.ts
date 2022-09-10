import { ItemType } from 'redux/reducers/app/types'
import { Nullable } from 'types'

export const setIsLoadingAC = (isLoading: boolean) => ({ type: 'APP/SET-IS-LOADING', isLoading } as const)

export const setErrorMessageAC = (errorMessage: Nullable<string>) => {
	return { type: 'APP/SET-ERROR-MESSAGE', errorMessage } as const
}

export const setSupplementedItemsAC = (items: ItemType[]) => ({ type: 'APP/SET-SUPPLEMENTED-ITEMS', items } as const)

export const addItemAC = (item: ItemType) => ({ type: 'APP/ADD-ITEM', item } as const)

export const removeItemAC = (id: number) => ({ type: 'APP/REMOVE-ITEM', id } as const)

export const changeItemTitleAC = (id: number, title: string) => ({ type: 'APP/CHANGE-ITEM-TITLE', id, title } as const)

export const changeAnyValueAC = (id: number, domainPayload: { title?: string, isActive?: boolean }) =>
	({ type: 'APP/CHANGE-ANY-VALUE', id, domainPayload } as const)

export const toggleItemIsActiveAC = (id: number) => ({ type: 'APP/TOGGLE-ITEM-IS-ACTIVE', id } as const)

export const setCountAC = () => ({ type: 'APP/SET-COUNT' } as const)

export const getCounterAC = (count: number) => ({ type: 'APP/GET-COUNTER', count } as const)
