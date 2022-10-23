import React, { FC, Suspense } from "react"
import { ReturnComponentType } from "types"
import { Route, Routes } from "react-router-dom"
import { Loader } from "components"
import { ROUTES } from "router"

export const App: FC = (): ReturnComponentType => {
  return (
    <div className="app">
      <Suspense fallback={<Loader/>}>
        <Routes>
          {ROUTES.map(({path, element}) => <Route key={path} path={path} element={element}/>)}
        </Routes>
      </Suspense>
    </div>
  )
}
