import React, {ChangeEvent, FC} from "react"
import {ReturnComponentType} from "types"
import {CheckboxPropsType} from "./types"
import style from "./Checkbox.module.scss"
import {EMPTY_STRING} from "constants/base"

export const Checkbox: FC<CheckboxPropsType> =
  ({
     isPrimary,
     isSecondary,
     className,
     labelClassName,
     spanClassName,
     children,
     onChange,
     setChecked,
     ...restProps
   }): ReturnComponentType => {

    const primaryCheckboxClass = isPrimary ? `${style.primaryCheckbox}` : EMPTY_STRING
    const secondaryCheckboxClass = isSecondary ? `${style.secondaryCheckbox}` : EMPTY_STRING
    const additionalCheckboxClass = className ? className : EMPTY_STRING
    const primaryLabelClass = children ? `${style.primaryLabel}` : EMPTY_STRING
    const additionalLabelClass = children && labelClassName ? labelClassName : EMPTY_STRING
    const primarySpanClass = `${style.primarySpan}`
    const additionalSpanClass = spanClassName ? spanClassName : EMPTY_STRING

    const onCheckboxChange = (event: ChangeEvent<HTMLInputElement>): void => {
      onChange && onChange(event)
      setChecked && setChecked(event.currentTarget.checked)
    }

    return (
      <label className={`${primaryLabelClass} ${additionalLabelClass}`}>
        <input
          className={`${primaryCheckboxClass} ${secondaryCheckboxClass} ${additionalCheckboxClass}`}
          style={children ? {marginRight: "9px"} : {}}
          type="checkbox"
          onChange={onCheckboxChange}
          {...restProps}
        />
        {children && <span className={`${primarySpanClass} ${additionalSpanClass}`}>{children}</span>}
      </label>
    )
  }
