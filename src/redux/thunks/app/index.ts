import { AUTH } from 'api'
import { AxiosError } from 'axios'
import { setIsLoadingAC } from 'redux/actions'
import { ThunkType } from 'redux/store'
import { handleServerNetworkError2 } from 'utils/handleServerNetworkError'

export const loginTC = (): ThunkType => async (dispatch, getState) => {

	dispatch(setIsLoadingAC(true))

	const state = getState()

	try {
		const response = await AUTH.login()
		const { data: items } = response

	} catch (error) {
		handleServerNetworkError2(error as AxiosError | Error, dispatch)
	} finally {
		dispatch(setIsLoadingAC(false))
	}
}
