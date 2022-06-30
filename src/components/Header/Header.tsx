import React, { FC } from 'react'
import { ReturnComponentType } from 'types'
import { HeaderPropsType } from './types'
import style from './Header.module.scss'

export const Header: FC<HeaderPropsType> = (): ReturnComponentType => {
	return (
		<header className={style.header}>
			header
		</header>
	)
}
