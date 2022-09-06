import React, { FC } from 'react'
import { ReturnComponentType } from 'types'
import { UniversalButtonPropsType } from './types'
import style from './UniversalButton.module.scss'

export const UniversalButton: FC<UniversalButtonPropsType> =
	({ isPrimary, isSecondary, className, ...restProps }): ReturnComponentType => {

		const primaryButton = isPrimary && `${style.primaryButton}`
		const secondaryButton = isSecondary && `${style.secondaryButton}`
		const otherButton = className && className

		return <button className={`${primaryButton} ${secondaryButton} ${otherButton}`} {...restProps} />
	}
