import React, {ChangeEvent, FC} from "react"
import {ReturnComponentType} from "types"
import {SelectPropsType} from "./types"
import {EMPTY_STRING} from "constants/base"
import style from "./Select.module.scss"

export const Select: FC<SelectPropsType> =
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

    const primarySelectClass = isPrimary ? `${style.primarySelect}` : EMPTY_STRING
    const secondarySelectClass = isSecondary ? `${style.secondarySelect}` : EMPTY_STRING
    const additionalSelectClass = className ? className : EMPTY_STRING
    const primaryOptionClass = `${style.primaryOption}`
    const additionalOptionClass = optionClassName ? optionClassName : EMPTY_STRING

    const optionsRender = options.map((option, index) => {
      return <option className={`${primaryOptionClass} ${additionalOptionClass}`} key={index}>{option}</option>
    })

    const onSelectChange = (event: ChangeEvent<HTMLSelectElement>): void => {
      onChange && onChange(event)
      setValue && setValue(event.currentTarget.value)
    }

    return (
      <select
        className={`${primarySelectClass} ${secondarySelectClass} ${additionalSelectClass}`}
        onChange={onSelectChange}
        {...restProps}
      >
        {optionsRender}
      </select>
    )
  }
