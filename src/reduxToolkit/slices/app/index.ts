import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {EMPTY_STRING} from "constants/base"
import {asyncAction} from "reduxToolkit/asyncActions"
import {AppSliceInitialStateType} from "./types"
import {isErrorRejected} from "reduxToolkit/helpers"

const initialState: AppSliceInitialStateType = {
  isLoading: false,
  errorMessage: EMPTY_STRING,
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
      .addCase(asyncAction.fulfilled, (state, action) => {

      })
      .addMatcher(isErrorRejected, (state, action: PayloadAction<{ error: string }>) => {
        state.errorMessage = action.payload.error
      })

  },
})

export const {setErrorMessage} = appSlice.actions

export default appSlice.reducer
