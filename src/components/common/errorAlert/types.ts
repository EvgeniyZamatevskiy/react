export type ErrorMessagePropsType = {
  errorMessage: string
  setErrorMessage: (errorMessage: string) => void
  type: "success" | "warning" | "error" | "info"
}
