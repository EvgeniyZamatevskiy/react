import {EMPTY_STRING} from "constants/base"
import {ChangeEvent, useState, useMemo, KeyboardEvent} from "react"

export const useInput = (key: string, callback: () => void) => {

  const [value, setValue] = useState(EMPTY_STRING)

  const resetValue = (): void => setValue(EMPTY_STRING)

  const onChange = (event: ChangeEvent<HTMLInputElement>): void => setValue(event.currentTarget.value)

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
    event.key === key && callback()
  }

  return useMemo(() => {
    return {value, onChange, onKeyDown, resetValue}
  }, [value, onChange, onKeyDown, resetValue])
}
