import { useCallback, useEffect, useState } from 'react'

export const useCopy = () => {
  const [isCopied, setIsCopied] = useState(false)

  const copy = useCallback(async (text: string) => {
    if (typeof text !== 'string') {
      return
    }

    try {
      await navigator.clipboard.writeText(text)
      setIsCopied(true)
    } catch (error) {
      console.log(`Unable to copy text: ${error}`)
    }
  }, [])

  useEffect(() => {
    if (isCopied) {
      const timer = setTimeout(() => {
        setIsCopied(false)
      }, 3000)

      return () => {
        clearTimeout(timer)
      }
    }
  }, [isCopied])

  return { isCopied, copy }
}
