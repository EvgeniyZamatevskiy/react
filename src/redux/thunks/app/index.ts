import { AUTH } from 'api'
import { AxiosError } from 'axios'
import { getCounterAC, setCountAC, setIsLoadingAC } from 'redux/actions'
import { ThunkType } from 'redux/store'
import { getParseLocalStorageData, setDataToLocalStorage } from 'services'
import { handleServerNetworkError2 } from 'utils/handleServerNetworkError'

// export const loginTC = (): ThunkType => async (dispatch, getState) => {

// 	dispatch(setIsLoadingAC(true))

// 	const state = getState()

// 	try {
// 		const response = await AUTH.login()
// 		const { data: items } = response

// 	} catch (error) {
// 		handleServerNetworkError2(error as AxiosError | Error, dispatch)
// 	} finally {
// 		dispatch(setIsLoadingAC(false))
// 	}
// }

// При работе с localStorage:
export const counterIncrementTC = (): ThunkType => (dispatch, getState) => {

	const counter = getState().app.counter

	try {
		setDataToLocalStorage('counter', counter + 1)
		dispatch(setCountAC())
	} catch (error) {
		handleServerNetworkError2(error as AxiosError | Error, dispatch)
	}
}

export const getCounterTC = (): ThunkType => (dispatch) => {
	try {
		const count = getParseLocalStorageData('counter', 0)
		dispatch(getCounterAC(count))
	} catch (error) {
		handleServerNetworkError2(error as AxiosError | Error, dispatch)
	}
}
