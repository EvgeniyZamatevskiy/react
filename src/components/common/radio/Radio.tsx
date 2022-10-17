import React, {ChangeEvent, FC} from "react"
import {ReturnComponentType} from "types"
import {UniversalRadioPropsType} from "./types"
import style from "./Radio.module.scss"
import {EMPTY_STRING} from "constants/base"

export const Radio: FC<UniversalRadioPropsType> =
  ({
     isPrimary,
     isSecondary,
     className,
     labelClassName,
     options,
     name,
     value,
     onChange,
     setValue,
     setIndex,
     ...restProps
   }): ReturnComponentType => {

    const primaryRadioClass = isPrimary ? `${style.primaryRadio}` : EMPTY_STRING
    const secondaryRadioClass = isSecondary ? `${style.secondaryRadio}` : EMPTY_STRING
    const additionalRadioClass = className ? className : EMPTY_STRING
    const primaryLabelClass = `${style.primaryLabel}`
    const additionalLabelClass = labelClassName ? labelClassName : EMPTY_STRING

    const optionsRender = options.map((option, index) => {

      const onRadioChange = (event: ChangeEvent<HTMLInputElement>): void => {
        onChange && onChange(event)
        setValue && setValue(event.currentTarget.value)
        setIndex && setIndex(index)
      }

      return (
        <label key={index} className={`${primaryLabelClass} ${additionalLabelClass}`}>
          <input
            className={`${primaryRadioClass} ${secondaryRadioClass} ${additionalRadioClass}`}
            type="radio"
            name={name}
            value={option}
            checked={option === value}
            onChange={onRadioChange}
            {...restProps}
          />
          {option}
        </label>
      )
    })

    return <>{optionsRender}</>
  }
