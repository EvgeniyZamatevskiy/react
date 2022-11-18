import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { EMPTY_STRING } from "constants/base"
import { asyncAction } from "store/asyncActions"
import { AppSliceInitialStateType } from "./types"
import { isActionTypeRejected } from "store/predicates"

const initialState: AppSliceInitialStateType = {
  loadingStatus: "idle",
  errorMessage: EMPTY_STRING,
  isInitialized: false
}

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setErrorMessage(state, action: PayloadAction<string>) {
      state.errorMessage = action.payload
    },
  },
  extraReducers(builder) {
    builder
      .addCase(asyncAction.pending, (state, action) => {

      })
      .addCase(asyncAction.rejected, (state, action) => {

      })
      .addCase(asyncAction.fulfilled, (state, action) => {

      })
      .addMatcher(isActionTypeRejected, (state, action: PayloadAction<string>) => {
        state.errorMessage = action.payload
      })
  },
})

export const {setErrorMessage} = appSlice.actions

export default appSlice.reducer
