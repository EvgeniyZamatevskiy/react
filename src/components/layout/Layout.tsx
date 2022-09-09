import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { ReturnComponentType } from 'types'
import { CustomLink } from 'components/common/customLink'

export const Layout: FC = (): ReturnComponentType => {
	return (
		<>
			<header>
				<CustomLink to={'/'} colorActiveLink='red'>Home</CustomLink>
				<CustomLink to={'/posts'} colorActiveLink='red'>Posts</CustomLink>
				<CustomLink to={'/posts/2'} colorActiveLink='red'>Posts params</CustomLink>
				<CustomLink to={'/posts/new'} colorActiveLink='red'>Posts new</CustomLink>
				<CustomLink to={'/about'} colorActiveLink='red'>About</CustomLink>
				<CustomLink to={'/about/123'} colorActiveLink='red'>About params</CustomLink>
				<CustomLink to={'/about/contacts'} colorActiveLink='red'>About contacts</CustomLink>
				<CustomLink to={'/about/team'} colorActiveLink='red'>About team</CustomLink>
			</header>

			<main><Outlet /></main>

			<footer>2022</footer>
		</>
	)
}
