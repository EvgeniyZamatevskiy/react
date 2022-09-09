import React, { FC } from 'react'
import { Path } from 'enums'
import { Navigate, useLocation } from 'react-router-dom'
import { ReturnComponentType } from 'types'
import { RequireAuthPropsType } from './types'

export const RequireAuth: FC<RequireAuthPropsType> = ({ children }): ReturnComponentType => {

	const location = useLocation()

	const isAuth = false

	if (!isAuth) {
		return <Navigate to={Path.LOGIN} state={{ from: location }} />
	}

	return <>{children}</>
}

// Использование в компоненте:
// export type LocationStateType = {
// 	from: { pathname: string }
// }

// const location = useLocation()

// const fromPage = (location.state as LocationStateType)?.from?.pathname || '/'

// if (isAuth) {
// 	return <Navigate to={fromPage} />
// }
