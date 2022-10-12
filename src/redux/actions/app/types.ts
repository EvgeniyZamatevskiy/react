import {setErrorMessageAC, setIsLoadingAC} from "."

export type AppReducerActionsType = SetIsLoadingActionType | SetErrorMessageActionType

export type SetIsLoadingActionType = ReturnType<typeof setIsLoadingAC>
export type SetErrorMessageActionType = ReturnType<typeof setErrorMessageAC>
