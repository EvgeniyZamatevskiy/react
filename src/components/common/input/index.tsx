import React, { ChangeEvent, FC, forwardRef, KeyboardEvent } from "react"
import { Key } from "enums"
import { ReturnComponentType } from "types"
import { InputPropsType } from "./types"
import { EMPTY_STRING } from "constants/base"
import classes from "./index.module.scss"

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

    const inputClass = variant ? classes[variant] : classes.input
    const additionalInputClass = className ? className : EMPTY_STRING
    const errorInputClass = error ? classes.errorInput : EMPTY_STRING
    const inputClasses = `${inputClass} ${additionalInputClass} ${errorInputClass}`
    const errorSpanClass = classes.errorSpan
    const additionalSpanClass = additionalErrorSpanClass ? additionalErrorSpanClass : EMPTY_STRING
    const errorSpanClasses = `${errorSpanClass} ${additionalSpanClass}`


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
      <div className={classes.container}>
        <input
          type={"text"}
          onChange={onInputChange}
          onKeyDown={onInputKeyDown}
          ref={ref}
          className={inputClasses}
          {...restProps}
        />
        {error && <span className={errorSpanClasses}>{error}</span>}
      </div>
    )
  })
