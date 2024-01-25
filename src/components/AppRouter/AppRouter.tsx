import { FC, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ROUTES } from 'router'

export const AppRouter: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {ROUTES.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  )
}
