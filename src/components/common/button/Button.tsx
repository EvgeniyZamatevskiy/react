import React, {FC} from "react"
import {ReturnComponentType} from "types"
import {ButtonPropsType} from "./types"
import {EMPTY_STRING} from "constants/base"
import style from "./Button.module.scss"

export const Button: FC<ButtonPropsType> =
  ({
     isPrimary,
     isSecondary,
     className,
     ...restProps
   }): ReturnComponentType => {

    const primaryButtonClass = isPrimary ? `${style.primaryButton}` : EMPTY_STRING
    const secondaryButtonClass = isSecondary ? `${style.secondaryButton}` : EMPTY_STRING
    const additionalButtonClass = className ? className : EMPTY_STRING

    return (
      <button
        className={`${primaryButtonClass} ${secondaryButtonClass} ${additionalButtonClass}`}
        {...restProps}
      />
    )
  }
