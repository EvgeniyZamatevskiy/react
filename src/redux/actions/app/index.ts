import {Nullable} from "types"

export const setIsLoadingAC = (isLoading: boolean) => ({type: "APP/SET-IS-LOADING", isLoading} as const)

export const setErrorMessageAC = (errorMessage: Nullable<string>) => {
  return {type: "APP/SET-ERROR-MESSAGE", errorMessage} as const
}
