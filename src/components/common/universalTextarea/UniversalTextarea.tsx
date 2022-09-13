import React, { ChangeEvent, FC } from 'react'
import { ReturnComponentType } from 'types'
import { UniversalTextareaPropsType } from './types'
import style from './UniversalTextarea.module.scss'

export const UniversalTextarea: FC<UniversalTextareaPropsType> =
	({
		onChange,
		setValue,
		value,
		limitLength,
		...restProps
	}): ReturnComponentType => {

		const onTextareaChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
			setValue && setValue(event.currentTarget.value)
			onChange && onChange(event)
		}

		return (
			<>
				<textarea maxLength={limitLength} onChange={onTextareaChange} {...restProps} />
				{limitLength && <span>{limitLength - value!.length}</span>}
			</>
		)
	}
