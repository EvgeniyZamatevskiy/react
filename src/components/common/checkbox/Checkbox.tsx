import React, {ChangeEvent, FC} from "react"
import {ReturnComponentType} from "types"
import {UniversalCheckboxPropsType} from "./types"
import style from "./Checkbox.module.scss"

export const Checkbox: FC<UniversalCheckboxPropsType> =
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

    const primaryCheckboxClass = isPrimary && `${style.primaryCheckbox}`
    const secondaryCheckboxClass = isSecondary && `${style.secondaryCheckbox}`
    const additionalCheckboxClass = className && className
    const primaryLabelClass = children && `${style.primaryLabel}`
    const additionalLabelClass = children && labelClassName && labelClassName
    const primarySpanClass = `${style.primarySpan}`
    const additionalSpanClass = spanClassName && spanClassName

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
