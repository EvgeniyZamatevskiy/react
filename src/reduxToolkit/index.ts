import { configureStore } from '@reduxjs/toolkit'
import { setDataToLocalStorage, getParseLocalStorageData } from 'services'
import appSlice from './slices/app'

export const store = configureStore({
	reducer: {
		app: appSlice,
	},
	//preloadedState: getParseLocalStorageData('counter', {})
})

export type RootStateType = ReturnType<typeof store.getState>
export type DispatchType = typeof store.dispatch

// store.subscribe(() => {
// 	setDataToLocalStorage<{ app: { counter: number } }>('counter', { app: { counter: store.getState().app.counter } })
// })
