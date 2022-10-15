import axios, {AxiosError} from "axios"
import {Dispatch} from "redux"

// export const serverNetworkError = (e: Error | AxiosError<{ error: string }>, dispatch: Dispatch<SetErrorMessageActionType>) => {
//
//   const err = e as Error | AxiosError<{ error: string }>
//
//   if (axios.isAxiosError(err)) {
//     const error = err.response?.data ? err.response.data.error : "Some error occurred"
//     dispatch(setErrorMessageAC(error))
//   } else {
//     dispatch(setErrorMessageAC(err.message))
//   }
// }
