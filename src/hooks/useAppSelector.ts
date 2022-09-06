import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { RootStateType } from 'redux/store'
// import { RootStateType } from 'reduxToolkit'

export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector
