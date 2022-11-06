import React, { ChangeEvent, FC } from "react"
import { ReturnComponentType } from "types"
import { SelectPropsType } from "./types"
import { EMPTY_STRING } from "constants/base"
import style from "./Select.module.scss"

export const Select: FC<SelectPropsType> =
  ({
     className,
     optionClassName,
     options,
     onChange,
     setValue,
     defaultValue,
     variant,
     ...restProps
   }): ReturnComponentType => {

    const selectClass = variant ? style[variant] : style.select
    const additionalSelectClass = className ? className : EMPTY_STRING
    const selectClasses = `${selectClass} ${additionalSelectClass}`
    const optionClass = style.option
    const additionalOptionClass = optionClassName ? optionClassName : EMPTY_STRING
    const optionClasses = `${optionClass} ${additionalOptionClass}`

    const onSelectChange = (event: ChangeEvent<HTMLSelectElement>): void => {
      setValue && setValue(Number(event.currentTarget.value))

      onChange && onChange(event)
    }

    const optionsRender = options.map(({id, name}) => {
      return <option key={id} className={optionClasses} value={id}>{name}</option>
    })

    return (
      <select className={selectClasses} onChange={onSelectChange} {...restProps}>
        {defaultValue && <option value={0} disabled>{defaultValue}</option>}
        {optionsRender}
      </select>
    )
  }
