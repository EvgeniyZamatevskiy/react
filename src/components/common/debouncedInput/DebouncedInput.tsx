import React, { ChangeEvent, FC, useEffect, useRef } from "react"
import { ReturnComponentType } from "types"
import { useDebounce } from "hooks"
import { DebouncedInputPropsType } from "./types"
import style from "./DebouncedInput.module.scss"

export const DebouncedInput: FC<DebouncedInputPropsType> =
  ({
     value,
     setValue,
     setDebouncedValue,
     ...restProps
   }): ReturnComponentType => {

    const isMounted = useRef(false)

    const debouncedValue = useDebounce(value)

    useEffect(() => {
      if (isMounted.current) {
        setDebouncedValue(debouncedValue as string)
      }

      isMounted.current = true
    }, [debouncedValue])

    const onInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
      setValue && setValue(event.currentTarget.value)
    }

    return (
      <input
        className={style.input}
        onChange={onInputChange}
        {...restProps}
      />
    )
  }
