import React, { ChangeEvent, MouseEvent } from "react"
import { RangePropsType } from "components/common/range/types"
import { ReturnComponentType } from "types"
import { EMPTY_STRING } from "constants/base"
import style from "./Range.module.scss"

export const Range: React.FC<RangePropsType> =
  ({
     onChange,
     onMouseUp,
     setValue,
     setCurrentValue,
     className,
     variant,
     ...restProps
   }): ReturnComponentType => {

    const rangeClass = variant ? style[variant] : style.range
    const additionalRangeClass = className ? className : EMPTY_STRING
    const rangeClasses = `${rangeClass} ${additionalRangeClass}`

    const onRangeChange = (event: ChangeEvent<HTMLInputElement>): void => {
      onChange && onChange(event)

      setValue && setValue(Number(event.currentTarget.value))
    }

    const onRangeMouseUp = (event: MouseEvent<HTMLInputElement>): void => {
      onMouseUp && onMouseUp(event)

      setCurrentValue && setCurrentValue(Number(event.currentTarget.value))
    }

    return (
      <input
        type={"range"}
        className={rangeClasses}
        onChange={onRangeChange}
        onMouseUp={onRangeMouseUp}
        {...restProps}/>
    )
  }
