import { configureStore } from "@reduxjs/toolkit"
import appSlice from "./slices/app"
import { setToLocalStorage, getFromLocalStorage } from "services"
import { LocalStorageKey } from "enums"

export const store = configureStore({
  reducer: {
    app: appSlice,
  },
  // preloadedState: getFromLocalStorage(LocalStorageKey.DATA, {})
})

export type RootStateType = ReturnType<typeof store.getState>
export type DispatchType = typeof store.dispatch

// store.subscribe(() => {
// 	setToLocalStorage<{ app: { counter: number } }>(LocalStorageKey.DATA, { app: { counter: store.getState().app.counter } })
// })
