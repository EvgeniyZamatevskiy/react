import {AUTH} from "api"
import {AxiosError} from "axios"
import {setIsLoadingAC} from "redux/actions"
import {ThunkType} from "redux/store"
import {handleServerNetworkError2} from "utils/handleServerNetworkError"

export const thunkTC = (): ThunkType => async (dispatch, getState) => {

  dispatch(setIsLoadingAC(true))

  const state = getState()

  try {
    const response = await AUTH.login()
    const {data: items} = response

  } catch (error) {
    handleServerNetworkError2(error as AxiosError | Error, dispatch)
  } finally {
    dispatch(setIsLoadingAC(false))
  }
}

// При работе с localStorage:
// export const counterIncreaseTC = (): ThunkType => (dispatch, getState) => {
//
// 	const counter = getState().app.counter
//
// 	try {
// 		setDataToLocalStorage<number>('counter', counter + 1)
// 		dispatch(counterIncreaseAC())
// 	} catch (error) {
// 		handleServerNetworkError2(error as AxiosError | Error, dispatch)
// 	}
// }
//
// export const getCurrentCounterValueTC = (): ThunkType => (dispatch) => {
// 	try {
// 		const counter = getParseLocalStorageData<number>('counter', 0)
// 		dispatch(getCurrentCounterValueAC(counter))
// 	} catch (error) {
// 		handleServerNetworkError2(error as AxiosError | Error, dispatch)
// 	}
// }
