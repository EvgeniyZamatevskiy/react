import { createAsyncThunk } from "@reduxjs/toolkit"
import { AUTH } from "api"
import { RootStateType } from "store"

export const asyncAction = createAsyncThunk<void, undefined, { rejectValue: string, state: RootStateType }>
("app/asyncAction", async (_, {rejectWithValue, getState, dispatch}) => {

  const state = getState()

  try {
    const {data: items} = await AUTH.login()

    return items
  } catch (error: any) {
    return rejectWithValue(error.message)
  }
})

// localStorage:
// export const counterIncrease = createAsyncThunk<number, undefined, { rejectValue: string, state: RootStateType }>
// ("app/counterIncrease", (_, {rejectWithValue, getState}) => {
//
//   const counter = getState().app.counter
//
//   try {
//     setDataToLocalStorage<number>("counter", counter + 1)
//
//     return counter
//   } catch (error: any) {
//     return rejectWithValue(error.message)
//   }
// })

// export const getCurrentCounterValue = createAsyncThunk<number, undefined, { rejectValue: string, state: RootStateType }>
// ("app/getCurrentCounterValue", (_, {rejectWithValue}) => {
//
//   try {
//     const counter = getParseLocalStorageData<number>("counter", 0)
//
//     return counter
//   } catch (error: any) {
//     return rejectWithValue(error.message)
//   }
// })
