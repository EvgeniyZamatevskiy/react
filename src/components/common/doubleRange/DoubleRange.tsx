import { ChangeEvent, FC, useCallback, useEffect, useState, useRef, MouseEvent } from "react"
import { DoubleRangePropsType } from "./types"
import { ReturnComponentType } from "types"
import { EMPTY_STRING } from "constants/base"
import style from "./DoubleRange.module.scss"

export const DoubleRange: FC<DoubleRangePropsType> =
  ({
     min,
     max,
     onChange,
     setCurrentMinValue,
     setCurrentMaxValue
   }
  ): ReturnComponentType => {

    const [minValue, setMinValue] = useState(min)
    const [maxValue, setMaxValue] = useState(max)

    const minValueRef = useRef<HTMLInputElement>(null)
    const maxValueRef = useRef<HTMLInputElement>(null)
    const rangeRef = useRef<HTMLDivElement>(null)

    const getPercent = useCallback((value: number): number => {
      return Math.round(((value - min) / (max - min)) * 100)
    }, [min, max])

    useEffect(() => {
      if (maxValueRef.current) {
        const minPercent = getPercent(minValue)
        const maxPercent = getPercent(Number(maxValueRef.current.value))

        if (rangeRef.current) {
          rangeRef.current.style.left = `${minPercent}%`
          rangeRef.current.style.width = `${maxPercent - minPercent}%`
        }
      }
    }, [minValue, getPercent])

    useEffect(() => {
      if (minValueRef.current) {
        const minPercent = getPercent(Number(minValueRef.current.value))
        const maxPercent = getPercent(maxValue)

        if (rangeRef.current) {
          rangeRef.current.style.width = `${maxPercent - minPercent}%`
        }
      }
    }, [maxValue, getPercent])

    useEffect(() => {
      onChange && onChange({min: minValue, max: maxValue})
    }, [minValue, maxValue, onChange])

    const onMinValueChange = (event: ChangeEvent<HTMLInputElement>): void => {
      const value = Math.min(Number(event.target.value), maxValue - 1)
      setMinValue(value)
      event.target.value = value.toString()
    }

    const onMaxValueChange = (event: ChangeEvent<HTMLInputElement>): void => {
      const value = Math.max(Number(event.target.value), minValue + 1)
      setMaxValue(value)
      event.target.value = value.toString()
    }

    const onMinValueMouseUp = (event: MouseEvent<HTMLInputElement>): void => {
      setCurrentMinValue && setCurrentMinValue(Number(event.currentTarget.value))
    }

    const onMaxValueMouseUp = (event: MouseEvent<HTMLInputElement>): void => {
      setCurrentMaxValue && setCurrentMaxValue(Number(event.currentTarget.value))
    }

    return (
      <div className={style.container}>
        <input
          type="range"
          min={min}
          max={max}
          value={minValue}
          ref={minValueRef}
          onChange={onMinValueChange}
          onMouseUp={onMinValueMouseUp}
          className={`${style.thumb} ${style.zIndex3} ${minValue > max - 100 ? style.zIndex5 : EMPTY_STRING}`}
        />
        <input
          type="range"
          min={min}
          max={max}
          value={maxValue}
          ref={maxValueRef}
          onChange={onMaxValueChange}
          onMouseUp={onMaxValueMouseUp}
          className={`${style.thumb} ${style.zIndex4}`}
        />

        <div className={style.slider}>
          <div className={style.sliderTrack}></div>
          <div className={style.sliderRange} ref={rangeRef}></div>
          <div className={style.sliderLeftValue}>{minValue}</div>
          <div className={style.sliderRightValue}>{maxValue}</div>
        </div>
      </div>
    )
  }
