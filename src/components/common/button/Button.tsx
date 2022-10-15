import React, {FC} from "react"
import {ReturnComponentType} from "types"
import {ButtonPropsType} from "./types"
import style from "./Button.module.scss"

export const Button: FC<ButtonPropsType> =
  ({
     isPrimary,
     isSecondary,
     className,
     ...restProps
   }): ReturnComponentType => {

    const primaryClass = isPrimary && `${style.primaryButton}`
    const secondaryClass = isSecondary && `${style.secondaryButton}`
    const additionalClass = className && className

    return <button className={`${primaryClass} ${secondaryClass} ${additionalClass}`} {...restProps} />
  }
