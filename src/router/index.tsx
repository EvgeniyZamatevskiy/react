import { Path } from 'enums'
import { Examples } from 'pages/examples/Examples'
import { lazy } from 'react'

const NotFound = lazy(() => import(/* webpackChunkName: 'NotFound' */'pages/notFound')
	.then(module => ({ default: module.NotFound })))

export const ROUTES = [
	{ path: Path.EXAMPLES, element: <Examples /> },
	{ path: Path.NOT_FOUND, element: <NotFound /> },
]
