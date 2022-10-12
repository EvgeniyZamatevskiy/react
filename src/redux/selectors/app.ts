import {RootStateType} from "redux/store"
import {Nullable} from "types"

export const selectErrorMessage = (state: RootStateType): Nullable<string> => state.app.errorMessage

export const selectIsLoading = (state: RootStateType): boolean => state.app.isLoading
