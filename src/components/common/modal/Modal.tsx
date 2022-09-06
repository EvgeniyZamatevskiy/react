import React, { FC, MouseEvent } from 'react'
import { ReturnComponentType } from 'types'
import { ModalPropsType } from './types'
import style from './Modal.module.scss'

export const Modal: FC<ModalPropsType> = ({ children, isModalActive, onDeactivateModalClick }): ReturnComponentType => {

	const onAscentCancellationClick = (event: MouseEvent<HTMLDivElement>): void => event.stopPropagation()

	return (
		<div className={`${style.modal} ${isModalActive && style.active}`} onClick={onDeactivateModalClick}>
			<div className={style.content} onClick={onAscentCancellationClick}>
				{children}
			</div>
		</div>
	)
}
