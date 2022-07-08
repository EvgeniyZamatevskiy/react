import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getItems } from './asyncActions'
import { AppSliceInitialStateType } from './types'

const initialState: AppSliceInitialStateType = {
	isLoading: false
}

export const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		action(state, action: PayloadAction<any>) {

		},
	},
	extraReducers(builder) {
		builder
			.addCase(getItems.pending, (state, action) => {

			})
			.addCase(getItems.fulfilled, (state, action) => {

			})
			.addCase(getItems.rejected, (state, action) => {

			})
	},
})

export const { action } = appSlice.actions

export default appSlice.reducer
