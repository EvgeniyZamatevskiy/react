import { FC } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { RequireAuthPropsType } from './types'

export const WithRequireAuth: FC<RequireAuthPropsType> = ({ children }) => {
  const location = useLocation()

  const isAuth = false

  if (!isAuth) {
    return <Navigate to='/login' state={{ from: location }} />
  }

  return children
}

// // или
// export const WithRequireAuth = (Component: () => ReactElement) => {
//   const NavigateComponent = () => {
//     const location = useLocation()

//     const isAuth = false

//     if (!isAuth) {
//       return <Navigate to={'/login'} state={{ from: location }} />
//     }

//     return <Component />
//   }

//   return NavigateComponent
// }

// // Использование в компоненте Login:
// export type LocationStateType = {
//   from: { pathname: string }
// }

// const location = useLocation()

// const fromPage = (location.state as LocationStateType)?.from?.pathname || '/'

// if (isAuth) {
//   return <Navigate to={fromPage} />
// }
