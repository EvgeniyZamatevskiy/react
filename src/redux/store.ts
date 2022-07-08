import { configureStore } from '@reduxjs/toolkit'
import appSlice from './app/slice'

export const store = configureStore({
	reducer: {
		app: appSlice
	}
})

export type RootStateType = ReturnType<typeof store.getState>
