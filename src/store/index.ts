import { configureStore } from "@reduxjs/toolkit"
import { setToLocalStorage, getFromLocalStorage } from "services"
import appSlice from "./slices/app"

export const store = configureStore({
  reducer: {
    app: appSlice,
  },
  //preloadedState: getFromLocalStorage('counter', {})
})

export type RootStateType = ReturnType<typeof store.getState>
export type DispatchType = typeof store.dispatch

// store.subscribe(() => {
// 	setToLocalStorage<{ app: { counter: number } }>('counter', { app: { counter: store.getState().app.counter } })
// })


// const store = createStore(rootReducer, applyMiddleware(thunk))
// type RootState = ReturnType<typeof store.getState>
// type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>
// type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>
// const useAppDispatch = () => useDispatch<AppDispatch>()
// const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
