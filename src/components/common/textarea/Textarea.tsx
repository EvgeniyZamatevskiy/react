import React, { ChangeEvent, KeyboardEvent, FC, forwardRef } from "react"
import { ReturnComponentType } from "types"
import { TextareaPropsType } from "./types"
import { Key } from "enums"
import { EMPTY_STRING } from "constants/base"
import style from "./Textarea.module.scss"

export const Textarea: FC<TextareaPropsType> = forwardRef(
  ({
     className,
     onChange,
     onKeyDown,
     setValue,
     onEnter,
     onEscape,
     variant,
     ...restProps
   },
   ref): ReturnComponentType => {

    const textareaClass = variant ? style[variant] : style.textarea
    const additionalTextareaClass = className ? className : EMPTY_STRING
    const textareaClasses = `${textareaClass} ${additionalTextareaClass}`

    const onTextareaChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
      onChange && onChange(event)

      setValue && setValue(event.currentTarget.value)
    }

    const onTextareaKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>): void => {
      onKeyDown && onKeyDown(event)

      onEnter && event.key === Key.ENTER && onEnter()
      onEscape && event.key === Key.ESCAPE && onEscape()
    }

    return (
      <textarea
        onChange={onTextareaChange}
        onKeyDown={onTextareaKeyDown}
        ref={ref}
        className={textareaClasses}
        {...restProps}
      />
    )
  })
