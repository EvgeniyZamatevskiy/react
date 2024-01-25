import type { RefObject } from 'react'
import { useCallback, useEffect } from 'react'

export const useClickOutside = (onClickOutside: VoidFunction, whiteRefs: RefObject<Element>[]) => {
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      const clickedOnRefs = whiteRefs?.some(({ current }) => {
        return event.target instanceof Element && current?.contains(event.target)
      })

      if (!clickedOnRefs) {
        onClickOutside()
      }
    },
    [onClickOutside, whiteRefs],
  )

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)

    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [handleClickOutside])
}
