import { useState } from "react"

export const useEye = () => {

  const [type, setType] = useState<"password" | "text">("password")

  const showOpenEye = (): void => setType("text")

  const showClosedEye = (): void => setType("password")

  return {type, showOpenEye, showClosedEye}
}
