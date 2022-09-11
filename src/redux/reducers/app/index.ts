import { AppReducerActionsType } from 'redux/actions/app/types'
import { getParseLocalStorageData } from 'services'
import { AppReducerInitStateType, FilterValue } from './types'

const initState: AppReducerInitStateType = {
	isLoading: false,
	errorMessage: null,
	// counter: getParseLocalStorageData<number>('counter', 0), // При работе с LocalStorage, чтобы не получать значение в Thunk
	counter: 0,

	items: [
		{ id: 1, title: 'example', isActive: true, filter: FilterValue.ALL, isDisabled: false },
	]
}

export const appReducer = (state: AppReducerInitStateType = initState, action: AppReducerActionsType): AppReducerInitStateType => {
	switch (action.type) {
		case 'APP/SET-IS-LOADING':
			return { ...state, isLoading: action.isLoading }
		case 'APP/SET-ERROR-MESSAGE':
			return { ...state, errorMessage: action.errorMessage }
		case 'APP/SET-SUPPLEMENTED-ITEMS':
			return { ...state, items: action.items.map(item => ({ ...item, isDisabled: false })) }
		case 'APP/ADD-ITEM':
			return { ...state, items: [...state.items, { ...action.item, isDisabled: false }] }
		case 'APP/CHANGE-ANY-VALUE':
			return { ...state, items: state.items.map(item => item.id === action.id ? { ...item, ...action.domainPayload } : item) }
		case 'APP/CHANGE-ITEM-TITLE':
			return { ...state, items: state.items.map(item => item.id === action.id ? { ...item, title: action.title } : item) }
		case 'APP/TOGGLE-ITEM-IS-ACTIVE':
			return { ...state, items: state.items.map(item => item.id === action.id ? { ...item, isActive: !item.isActive } : item) }
		case 'APP/REMOVE-ITEM':
			return { ...state, items: state.items.filter(item => item.id !== action.id) }

		case 'APP/COUNTER-INCREASE':
			return { ...state, counter: state.counter + 1 }

		case 'APP/GET-CURRENT-COUNTER-VALUE':
			return { ...state, counter: action.currentCounterValue }

		default:
			return state
	}
}
