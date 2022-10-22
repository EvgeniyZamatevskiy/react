import React, { ChangeEvent, FC, forwardRef, KeyboardEvent } from "react"
import { Key } from "enums"
import { ReturnComponentType } from "types"
import { InputPropsType } from "./types"
import { EMPTY_STRING } from "constants/base"
import style from "./Input.module.scss"

export const Input: FC<InputPropsType> = forwardRef(
  ({
     className,
     onChange,
     onKeyDown,
     setValue,
     onEnter,
     onEscape,
     error,
     additionalErrorSpanClass,
     variant,
     ...restProps
   },
   ref): ReturnComponentType => {

    const inputClass = variant ? style[variant] : style.input
    const additionalInputClass = className ? className : EMPTY_STRING
    const errorInputClass = error ? style.errorInput : EMPTY_STRING
    const errorSpanClass = style.errorSpan
    const additionalSpanClass = additionalErrorSpanClass ? additionalErrorSpanClass : EMPTY_STRING

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
      <div className={style.container}>
        <input
          type={"text"}
          onChange={onInputChange}
          onKeyDown={onInputKeyDown}
          ref={ref}
          className={`${inputClass} ${additionalInputClass} ${errorInputClass}`}
          {...restProps}
        />
        {error && <span className={`${errorSpanClass} ${additionalSpanClass}`}>{error}</span>}
      </div>
    )
  })
