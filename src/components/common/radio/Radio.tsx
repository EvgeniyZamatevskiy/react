import React, { ChangeEvent, FC } from "react"
import { ReturnComponentType } from "types"
import { UniversalRadioPropsType } from "./types"
import { EMPTY_STRING } from "constants/base"
import style from "./Radio.module.scss"

export const Radio: FC<UniversalRadioPropsType> =
  ({
     className,
     labelClassName,
     options,
     name,
     value,
     onChange,
     setOption,
     variant,
     spanClassName,
     ...restProps
   }): ReturnComponentType => {

    const radioClass = variant ? style[variant] : style.radio
    const additionalRadioClass = className ? className : EMPTY_STRING
    const radioClasses = `${radioClass} ${additionalRadioClass}`
    const labelClass = style.label
    const additionalLabelClass = labelClassName ? labelClassName : EMPTY_STRING
    const labelClasses = `${labelClass} ${additionalLabelClass}`
    const spanClass = style.span
    const additionalSpanClass = spanClassName ? spanClassName : EMPTY_STRING
    const spanClasses = `${spanClass} ${additionalSpanClass}`

    const optionsRender = options.map(option => {

      const onRadioChange = (event: ChangeEvent<HTMLInputElement>): void => {
        onChange && onChange(event)

        setOption && setOption(Number(event.currentTarget.value))
      }

      return (
        <label key={option.id} className={labelClasses}>
          <input
            type={"radio"}
            className={radioClasses}
            name={name}
            value={option.id}
            checked={option.id === value}
            onChange={onRadioChange}
            {...restProps}
          />
          <span className={spanClasses}>{option.value}</span>
        </label>
      )
    })

    return <>{optionsRender}</>
  }
