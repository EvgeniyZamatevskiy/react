import React, { ChangeEvent, FC } from "react"
import { ReturnComponentType } from "types"
import { CheckboxPropsType } from "./types"
import { EMPTY_STRING } from "constants/base"
import style from "./Checkbox.module.scss"

export const Checkbox: FC<CheckboxPropsType> =
  ({
     className,
     labelClassName,
     spanClassName,
     children,
     onChange,
     setChecked,
     variant,
     ...restProps
   }): ReturnComponentType => {

    const checkboxClass = variant ? style[variant] : style.checkbox
    const additionalCheckboxClass = className ? className : EMPTY_STRING
    const labelClass = children ? style.label : EMPTY_STRING
    const additionalLabelClass = children && labelClassName ? labelClassName : EMPTY_STRING
    const spanClass = style.span
    const additionalSpanClass = spanClassName ? spanClassName : EMPTY_STRING

    const onCheckboxChange = (event: ChangeEvent<HTMLInputElement>): void => {
      onChange && onChange(event)

      setChecked && setChecked(event.currentTarget.checked)
    }

    return (
      <label className={`${labelClass} ${additionalLabelClass}`}>
        <input
          type="checkbox"
          className={`${checkboxClass} ${additionalCheckboxClass}`}
          style={children ? {marginRight: "9px"} : {}}
          onChange={onCheckboxChange}
          {...restProps}
        />
        {children && <span className={`${spanClass} ${additionalSpanClass}`}>{children}</span>}
      </label>
    )
  }
