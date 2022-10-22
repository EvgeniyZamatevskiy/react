import React, { FC } from "react"
import { ReturnComponentType } from "types"
import { ButtonPropsType } from "./types"
import { EMPTY_STRING } from "constants/base"
import style from "./Button.module.scss"

export const Button: FC<ButtonPropsType> = ({className, variant, disabled, ...restProps}): ReturnComponentType => {

  const buttonClass = variant ? style[variant] : style.button
  const additionalButtonClass = className ? className : EMPTY_STRING
  const buttonDisabledClass = disabled ? style.disabled : EMPTY_STRING

  return (
    <button
      className={`${buttonClass} ${additionalButtonClass} ${buttonDisabledClass}`}
      {...restProps}
    />
  )
}
