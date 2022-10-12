import {RootStateType} from "reduxToolkit"

export const selectIsLoading = (state: RootStateType): boolean => state.app.isLoading

export const selectErrorMessage = (state: RootStateType): string => state.app.errorMessage
