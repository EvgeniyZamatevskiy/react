import exampleSlice, {setErrorMessage} from "reduxToolkit/slices/app"
import {AppSliceInitialStateType} from "../slices/app/types"

let startState: AppSliceInitialStateType

beforeEach(() => {
  startState = {
    isLoading: false,
    errorMessage: "",
  }
})

test("correct error message should be set", () => {

  const action = setErrorMessage("some error occurred!")

  const endState = exampleSlice(startState, action)

  expect(endState.errorMessage).toBe("some error occurred!")
})
