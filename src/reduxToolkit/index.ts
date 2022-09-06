import { configureStore } from '@reduxjs/toolkit'
import appSlice from './slices/app'

export const store = configureStore({
	reducer: {
		app: appSlice,
	}
})

export type RootStateType = ReturnType<typeof store.getState>
export type DispatchType = typeof store.dispatch
