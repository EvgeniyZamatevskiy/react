import {createAsyncThunk} from "@reduxjs/toolkit"
import {AUTH} from "api"
import {AxiosError} from "axios"
import {RootStateType} from "reduxToolkit"
import {handleServerNetworkError} from "utils"

export const asyncAction = createAsyncThunk<void, undefined, { rejectValue: { error: string }, state: RootStateType }>
("app/asyncAction", async (_, {rejectWithValue, getState, dispatch}) => {

  const state = getState()

  try {
    const response = await AUTH.login()
    const {data: items} = response

    return items
  } catch (error) {
    return handleServerNetworkError(error as AxiosError | Error, rejectWithValue)
  }
})

// При работе с localStorage:
// export const counterIncrease = createAsyncThunk<number, undefined, { rejectValue: { error: string }, state: RootStateType }>
// ("app/counterIncrease", (_, {rejectWithValue, getState}) => {
//
//   const counter = getState().app.counter
//
//   try {
//     setDataToLocalStorage<number>("counter", counter + 1)
//
//     return counter
//   } catch (error) {
//     return handleServerNetworkError(error as AxiosError | Error, rejectWithValue)
//   }
// })
//
// export const getCurrentCounterValue = createAsyncThunk<number, undefined, { rejectValue: { error: string }, state: RootStateType }>
// ("app/getCurrentCounterValue", (_, {rejectWithValue}) => {
//
//   try {
//     const counter = getParseLocalStorageData<number>("counter", 0)
//
//     return counter
//   } catch (error) {
//     return handleServerNetworkError(error as AxiosError | Error, rejectWithValue)
//   }
// })
