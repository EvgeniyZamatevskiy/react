import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { EMPTY_STRING } from 'constants/base'
import { asyncAction, counterIncrease, getCurrentCounterValue } from 'reduxToolkit/asyncActions'
import { isLoadingFulfilled, isLoadingPending, isLoadingRejected } from 'reduxToolkit/helpers'
import { getParseLocalStorageData } from 'services'
import { AppSliceInitialStateType, ItemType } from './types'

const initialState: AppSliceInitialStateType = {
	isLoading: false,
	isDisabled: false,
	errorMessage: EMPTY_STRING,
	// counter: getParseLocalStorageData<number>('counter', 0), // При работе с LocalStorage, чтобы не получать значение в Thunk
	counter: 0,

	items: [
		// { id: 1, title: 'example', isActive: true, filter: FilterValue.ALL},
		// { id: 2, title: 'example2', isActive: false, filter: FilterValue.ALL},
	]
}

const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		setErrorMessage(state, action: PayloadAction<string>) {
			state.errorMessage = action.payload
		},
		setSupplementedItems(state, action: PayloadAction<ItemType[]>) {
			state.items = action.payload.map(item => ({ ...item, isOnline: false }))
		},
		addItem(state, action: PayloadAction<ItemType>) {
			state.items.unshift({ ...action.payload, isOnline: false })
		},
		removeItem(state, action: PayloadAction<number>) {
			state.items = state.items.filter(item => item.id !== action.payload)
			// const index = state.items.findIndex(item => item.id === action.payload)
			// if (index > -1) {
			// 	state.items.splice(index, 1)
			// }
		},
		changeItemTitle(state, action: PayloadAction<{ id: number, title: string }>) {
			const item = state.items.find(item => item.id === action.payload.id)
			if (item) {
				item.title = action.payload.title
			}
			// const index = state.items.findIndex(item => item.id === action.payload.id)
			// if (index > -1) {
			// 	state.items[index].title = action.payload.title
			// }
		},
		changeAnyValue(state, action: PayloadAction<{ id: number, domainPayload: { title?: string, isActive?: boolean } }>) {
			const index = state.items.findIndex(item => item.id === action.payload.id)
			if (index > -1) {
				state.items[index] = { ...state.items[index], ...action.payload.domainPayload }
			}
		},
		toggleItemIsActive(state, action: PayloadAction<{ id: number }>) {
			const item = state.items.find(item => item.id === action.payload.id)
			if (item) {
				item.isActive = !item.isActive
			}
			// const index = state.items.findIndex(item => item.id === action.payload.id)
			// if (index > -1) {
			// 	state.items[index].isActive = !state.items[index].isActive
			// }
		},
	},
	extraReducers(builder) {
		builder
			.addCase(asyncAction.fulfilled, (state, action) => {

			})
			.addCase(counterIncrease.fulfilled, (state, action) => {
				state.counter = action.payload + 1
			})
			.addCase(getCurrentCounterValue.fulfilled, (state, action) => {
				state.counter = action.payload
			})
			.addMatcher(isLoadingPending, (state) => {
				state.isLoading = true
			})
			.addMatcher(isLoadingFulfilled, (state) => {
				state.isLoading = false
			})
			.addMatcher(isLoadingRejected, (state) => {
				state.isLoading = false
			})

	},
})

export const {
	setSupplementedItems,
	addItem, removeItem,
	changeItemTitle,
	changeAnyValue,
	setErrorMessage,
	toggleItemIsActive,
	// counterIncrease,
} = appSlice.actions

export default appSlice.reducer
