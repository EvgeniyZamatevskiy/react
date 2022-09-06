import axios, { AxiosError } from 'axios'
import { Dispatch } from 'redux'
import { setErrorMessageAC } from 'redux/actions'
import { SetErrorMessageActionType } from 'redux/actions/app/types'

// Для Redux Toolkit
export const handleServerNetworkError =
	(e: Error | AxiosError<{ error: string }>, rejectWithValue: (value: { error: string }) => any) => {

		const err = e as Error | AxiosError<{ error: string }>

		if (axios.isAxiosError(err)) {
			const error = err.response?.data ? err.response.data.error : 'Some error occurred'
			return rejectWithValue({ error })
		} else {
			return rejectWithValue({ error: err.message })
		}
	}

// Для Redux
export const handleServerNetworkError2 =
	(e: Error | AxiosError<{ error: string }>, dispatch: Dispatch<SetErrorMessageActionType>) => {

		const err = e as Error | AxiosError<{ error: string }>

		if (axios.isAxiosError(err)) {
			const error = err.response?.data ? err.response.data.error : 'Some error occurred'
			dispatch(setErrorMessageAC(error))
		} else {
			dispatch(setErrorMessageAC(err.message))
		}
	}
