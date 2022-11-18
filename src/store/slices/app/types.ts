export type AppSliceInitialStateType = {
  loadingStatus: LoadingStatusType
  errorMessage: string
  isInitialized: false
}

export type LoadingStatusType = "idle" | "loading" | "succeeded" | "failed"
