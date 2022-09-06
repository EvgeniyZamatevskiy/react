import { AppReducerActionsType } from 'redux/actions/app/types'
import { AppReducerInitStateType } from './types'

const initState: AppReducerInitStateType = {
	isLoading: false,
	errorMessage: null,
}

export const appReducer = (state: AppReducerInitStateType = initState, action: AppReducerActionsType): AppReducerInitStateType => {
	debugger
	switch (action.type) {
		case 'APP/SET-IS-LOADING':
			return { ...state, isLoading: action.isLoading }
		case 'APP/SET-ERROR-MESSAGE':
			return { ...state, errorMessage: action.errorMessage }

		default:
			return state
	}
}
