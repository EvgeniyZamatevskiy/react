import {RootStateType} from "store"

export const selectIsLoading = (state: RootStateType): boolean => state.app.isLoading

export const selectErrorMessage = (state: RootStateType): string => state.app.errorMessage
