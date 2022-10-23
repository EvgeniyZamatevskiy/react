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
     setOption,
     variant,
     ...restProps
   }): ReturnComponentType => {

    const selectClass = variant ? style[variant] : style.select
    const additionalSelectClass = className ? className : EMPTY_STRING
    const selectClasses = `${selectClass} ${additionalSelectClass}`
    const optionClass = style.option
    const additionalOptionClass = optionClassName ? optionClassName : EMPTY_STRING
    const optionClasses = `${optionClass} ${additionalOptionClass}`

    const optionsRender = options.map((option) => {
      return <option key={option.id} className={optionClasses} value={option.id}>{option.value}</option>
    })

    const onSelectChange = (event: ChangeEvent<HTMLSelectElement>): void => {
      onChange && onChange(event)

      setOption && setOption(Number(event.currentTarget.value))
    }

    return (
      <select className={selectClasses} onChange={onSelectChange} {...restProps}>
        {optionsRender}
      </select>
    )
  }
