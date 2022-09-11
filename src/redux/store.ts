import { applyMiddleware, combineReducers, legacy_createStore } from 'redux'
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { getParseLocalStorageData, setDataToLocalStorage } from 'services'
import { AppReducerActionsType } from './actions/app/types'
import { appReducer } from './reducers/app'

const rootReducer = combineReducers({
	app: appReducer,
})

export const store = legacy_createStore(
	rootReducer,
	// getParseLocalStorageData('counter', {}),
	applyMiddleware(thunk))

export type StoreType = typeof store
export type RootStateType = ReturnType<typeof rootReducer>
export type AppActionsType = AppReducerActionsType
export type DispatchType = ThunkDispatch<RootStateType, unknown, AppActionsType>

// Типизация Thunk:

// ReturnType - То, что Thunk возвращает
// RootStateType - Типизация для state всего приложения
// unknown - Для экстра аргументов
// AppActionsType - Типизация всех типов action-ов, которые могут быть за-dispatch-ены
export type ThunkType<ReturnType = void> = ThunkAction<ReturnType, RootStateType, unknown, AppActionsType>

// Позволяет dispatch-ить объекты, у которых есть свойство type, с любым значением (Нельзя dispatch-ить thunk-у в другой thunk-е!!!)
// Dispatch (import from 'redux')

// Позволяет dispatch-ить объекты, у которых есть свойство type, с конкретными значениями, указанные в generic-е (Нельзя dispatch-ить thunk-у в другой thunk-е!!!)
// Dispatch<AppActionsType>

// Сохранение state в localStorage
// store.subscribe(() => {
// 	setDataToLocalStorage<{ app: { counter: number } }>('counter', { app: { counter: store.getState().app.counter } })
// })
