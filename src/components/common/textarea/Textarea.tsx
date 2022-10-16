import React, {ChangeEvent, KeyboardEvent, FC, forwardRef} from "react"
import {ReturnComponentType} from "types"
import {TextareaPropsType} from "./types"
import {Key} from "enums"
import {EMPTY_STRING} from "constants/base"
import style from "./Textarea.module.scss"

export const Textarea: FC<TextareaPropsType> = forwardRef(
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

    const primaryTextareaClass = isPrimary ? `${style.primaryTextarea}` : EMPTY_STRING
    const secondaryTextareaClass = isSecondary ? `${style.secondaryTextarea}` : EMPTY_STRING
    const additionalTextareaClass = className ? className : EMPTY_STRING

    const onTextareaChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
      setValue && setValue(event.currentTarget.value)
      onChange && onChange(event)
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
        className={`${primaryTextareaClass} ${secondaryTextareaClass} ${additionalTextareaClass}`}
        {...restProps}
      />
    )
  })
