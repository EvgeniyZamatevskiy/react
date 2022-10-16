import React, {FC} from "react"
import {Link, useMatch} from "react-router-dom"
import {ReturnComponentType} from "types"
import {CustomLinkPropsType} from "./types"

export const CustomLink: FC<CustomLinkPropsType> =
  ({
     children,
     to,
     colorActiveLink,
     end,
     ...restProps
   }): ReturnComponentType => {

    const match = useMatch({path: to, end: end || to.length === 1})

    return (
      <Link to={to} style={{color: match ? colorActiveLink : "inherit"}} {...restProps}>
        {children}
      </Link>
    )
  }

// Активная ссылка без CustomLink
// <NavLink className={({ isActive }: { isActive: boolean }) => isActive ? style.activeLink : EMPTY_STRING} to={'/'} end>Home</NavLink>
// <NavLink style={({ isActive }: { isActive: boolean }) => ({ color: isActive ? 'red' : EMPTY_STRING })} to={'/'} end>Home</NavLink>
