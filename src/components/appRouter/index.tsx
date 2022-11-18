import React, { FC, Suspense } from "react"
import { Loader } from "components"
import { Route, Routes } from "react-router-dom"
import { ROUTES } from "router"
import { ReturnComponentType } from "types"

export const AppRouter: FC = (): ReturnComponentType => {
  return (
    <Suspense fallback={<Loader/>}>
      <Routes>
        {ROUTES.map(({path, element}) => <Route key={path} path={path} element={element}/>)}
      </Routes>
    </Suspense>
  )
}
