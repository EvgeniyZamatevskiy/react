import {useDispatch} from "react-redux"
// import { DispatchType } from 'redux/store' // Тип для Redux
import {DispatchType} from "reduxToolkit" // Тип для Redux Toolkit

export const useAppDispatch = () => useDispatch<DispatchType>()
