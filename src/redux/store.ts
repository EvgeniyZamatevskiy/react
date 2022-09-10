import { applyMiddleware, combineReducers, legacy_createStore } from 'redux'
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { getParseLocalStorageData, setDataToLocalStorage } from 'services'
import { AppReducerActionsType } from './actions/app/types'
import { appReducer } from './reducers/app'

const rootReducer = combineReducers({
	app: appReducer,
})

export const store = legacy_createStore(rootReducer, getParseLocalStorageData('counter', {}), applyMiddleware(thunk))

export type StoreType = typeof store
export type RootStateType = ReturnType<typeof rootReducer>
export type AppActionsType = AppReducerActionsType
export type ThunkType<ReturnType = void> = ThunkAction<ReturnType, RootStateType, unknown, AppActionsType>
export type DispatchType = ThunkDispatch<RootStateType, unknown, AppActionsType>

store.subscribe(() => {
	setDataToLocalStorage<{ app: { counter: number } }>('counter', { app: { counter: store.getState().app.counter } })
})
