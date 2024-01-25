import { Path } from 'enums'
import { Home } from 'pages'
import { lazy } from 'react'
import { Navigate } from 'react-router-dom'

const NotFound = lazy(async () => {
  const module = await import(/* webpackChunkName: 'NotFound' */ 'pages/NotFound')

  return {
    default: module.NotFound,
  }
})

export const ROUTES = [
  { path: Path.HOME, element: <Home /> },
  { path: Path.NOT_FOUND_404, element: <NotFound /> },
  { path: Path.NOT_FOUND, element: <Navigate to={Path.NOT_FOUND_404} /> },
]
