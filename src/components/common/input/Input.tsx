import React, {ChangeEvent, FC, forwardRef, KeyboardEvent, SyntheticEvent} from "react"
import {Key} from "enums"
import {ReturnComponentType} from "types"
import {InputPropsType} from "./types"
import style from "./Input.module.scss"
import {EMPTY_STRING} from "constants/base";

export const Input: FC<InputPropsType> = forwardRef(
  ({
     isPrimary,
     isSecondary,
     className,
     onChange,
     onKeyDown,
     setValue,
     onEnter,
     onEscape,
     ...restProps
   },
   ref): ReturnComponentType => {

    const primaryClass = isPrimary ? `${style.primaryInput}` : EMPTY_STRING
    const secondaryClass = isSecondary ? `${style.secondaryInput}` : EMPTY_STRING
    const additionalClass = className ? className : EMPTY_STRING

    const onInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
      onChange && onChange(event)
      setValue && setValue(event.currentTarget.value)
    }

    const onInputKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
      onKeyDown && onKeyDown(event)
      onEnter && event.key === Key.ENTER && onEnter()
      onEscape && event.key === Key.ESCAPE && onEscape()
    }

    return (
      <input
        onChange={onInputChange}
        onKeyDown={onInputKeyDown}
        ref={ref}
        className={`${primaryClass} ${secondaryClass} ${additionalClass}`}
        {...restProps}
      />
    )
  })
