import React, { FC, Suspense } from 'react'
import { Loader, Layout } from 'components'
import { NotFound } from 'pages/notFound'
import { Routes, Route, Outlet, Link, Navigate } from 'react-router-dom'
import { ReturnComponentType } from 'types'

export const ReactRouterDom: FC = (): ReturnComponentType => {
	return (
		<Suspense fallback={<Loader />}>
			<Routes>
				{/* {ROUTES.map(({ path, element }) => <Route key={path} path={path} element={element} />)} */}

				<Route path='/' element={<Layout />}>
					<Route index element={<div>Home</div>} />
					<Route path={'posts'} element={<div>posts</div>} />
					<Route path={'posts/new'} element={<div>New page posts</div>} />

					<Route path={'posts/:id'} element={<div>Post</div>} />
					<Route path={'posts/:id/comments'} element={<div>Comments</div>} />

					{/* <Route path={'about/*'} element={<About />} />
            Использование внутри компонента:
            <Routes>
              <Route path={'contacts'} element={<div>contacts</div>} />
              <Route path={'team'} element={<div>team</div>} />
            </Routes> */}

					<Route path={'about'} element={
						<div>
							<Outlet />
							<Link to={'contacts'}>Contacts</Link>
							<Link to={'team'}>Team</Link>
						</div>}>
						<Route index element={<div>About home</div>} />
						<Route path={':aboutId'} element={<div>будет ID</div>} />
						<Route path={'contacts'} element={<div>Contacts</div>} />
						<Route path={'team'} element={<div>team</div>} />
					</Route>

					<Route path={'*'} element={<Navigate to='404' replace />} />
					<Route path={'404'} element={<NotFound />} />
				</Route>
			</Routes>
		</Suspense>
	)
}

// * - говорит о том, что к примеру после posts/* может быть все что угодно и 404 ошибки не произойдет
// replace и {replace: true} - чтобы в истории браузера не сохранялось посещение адреса
