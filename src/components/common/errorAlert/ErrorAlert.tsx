import React, { FC, useEffect } from 'react'
import { EMPTY_STRING } from 'constants/base'
import { ReturnComponentType } from 'types/ReturnComponentType'
import { UniversalButton } from '../universalButton'
import { ErrorMessagePropsType } from './types'
import style from './ErrorAlert.module.scss'

const DELAY = 3000

export const ErrorAlert: FC<ErrorMessagePropsType> = ({ errorMessage, setErrorMessage }): ReturnComponentType => {

	useEffect(() => {
		if (errorMessage) {
			const timerId = setTimeout(() => {
				onDeactivateErrorAlertClick()
			}, DELAY)

			return (() => {
				clearTimeout(timerId)
			})
		}
	}, [errorMessage])

	const onDeactivateErrorAlertClick = (): void => {
		setErrorMessage(EMPTY_STRING)
	}

	return (
		<div className={`${style.errorAlert} ${!errorMessage && style.closeErrorAlert}`}>
			<div className={style.alertContainer}>
				<span className={style.ellipse}>!</span>
				<div className={style.alert}>{errorMessage}</div>
			</div>
			<UniversalButton
				className={style.deactivateErrorAlertBtn}
				onClick={onDeactivateErrorAlertClick}
			>
				&#10006;
			</UniversalButton>
		</div>
	)
}
