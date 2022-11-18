import React, { FC } from "react"
import { AppRouter, Header } from "components"
import { ReturnComponentType } from "types"

export const App: FC = (): ReturnComponentType => {
  return (
    <div className="app">
      <Header/>
      <AppRouter/>
    </div>
  )
}
