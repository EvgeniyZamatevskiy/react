import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { AppReducerActionsType } from './actions/app/types'
import { appReducer } from './reducers/app'

const rootReducer = combineReducers({
	app: appReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootStateType = ReturnType<typeof rootReducer>
export type AppActionsType = AppReducerActionsType
export type ThunkType<ReturnType = void> = ThunkAction<ReturnType, RootStateType, unknown, AppActionsType>
export type DispatchType = ThunkDispatch<RootStateType, unknown, AppActionsType>
