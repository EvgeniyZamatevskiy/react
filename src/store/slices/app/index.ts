import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { asyncAction } from 'store/asyncActions'
import { isActionTypeRejected } from 'store/predicates'
import { AppSliceInitialStateType } from './types'

const initialState: AppSliceInitialStateType = {
  loadingStatus: 'idle',
  errorMessage: '',
  isInitialized: false,
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setErrorMessage(state, action: PayloadAction<string>) {
      state.errorMessage = action.payload
    },
  },
  extraReducers(builder) {
    builder
      .addCase(asyncAction.pending, () => {})
      .addCase(asyncAction.rejected, () => {})
      .addCase(asyncAction.fulfilled, () => {})
      .addMatcher(isActionTypeRejected, (state, action: PayloadAction<string>) => {
        state.errorMessage = action.payload
      })
  },
})

export const { setErrorMessage } = appSlice.actions

export default appSlice.reducer
