import { useRef, useState, useEffect } from "react"

export const useButtonLoader = (defaultText = "Load", loadingText = "Loading...") => {

  const [isLoading, setLoading] = useState(false)
  const element = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (isLoading && element.current) {
      element.current.disabled = true
      element.current.innerHTML = "<i class=\"fas fa-spinner fa-spin\"></i> " + loadingText
    } else {
      if (element.current) {
        element.current.disabled = false
        element.current.innerHTML = defaultText
      }
    }
  }, [isLoading])

  return [element, setLoading]
}
