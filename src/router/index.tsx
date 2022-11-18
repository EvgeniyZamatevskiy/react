import { Path } from "enums"
import { lazy } from "react"
import { Navigate } from "react-router-dom"
import { Users } from "pages/users"

const NotFound = lazy(() => import(/*webpackChunkName: 'NotFound'*/"pages/notFound")
  .then(module => ({default: module.NotFound})))

export const ROUTES = [
  {path: Path.HOME, element: <Navigate to={Path.USERS}/>},
  {path: Path.USERS, element: <Users/>},
  {path: Path.NOT_FOUND, element: <Navigate to={Path.NOT_FOUND_404}/>},
  {path: Path.NOT_FOUND_404, element: <NotFound/>},
]
