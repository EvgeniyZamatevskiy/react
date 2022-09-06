import React, { ChangeEvent, FC } from 'react'
import { ReturnComponentType } from 'types'
import { UniversalSelectPropsType } from './types'
import style from './UniversalSelect.module.scss'

export const UniversalSelect: FC<UniversalSelectPropsType> =
	({
		isPrimary,
		isSecondary,
		className,
		optionClassName,
		options,
		onChange,
		setValue,
		...restProps
	}): ReturnComponentType => {

		const primarySelect = isPrimary && `${style.primarySelect}`
		const secondarySelect = isSecondary && `${style.secondarySelect}`
		const otherSelect = className && className
		const primaryOption = `${style.primaryOption}`
		const otherOption = optionClassName && optionClassName

		const optionsRender = options.map((option, index) => {
			return <option className={`${primaryOption} ${otherOption}`} key={index}>{option}</option>
		})

		const onSelectChange = (event: ChangeEvent<HTMLSelectElement>): void => {
			onChange && onChange(event)
			setValue && setValue(event.currentTarget.value)
		}

		return (
			<select
				className={`${primarySelect} ${secondarySelect} ${otherSelect}`}
				onChange={onSelectChange}
				{...restProps}
			>
				{optionsRender}
			</select>
		)
	}
