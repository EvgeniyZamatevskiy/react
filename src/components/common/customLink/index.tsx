import React, { FC } from "react";
import { Link, useMatch } from "react-router-dom";
import { CustomLinkPropsType } from "./types";

export const CustomLink: FC<CustomLinkPropsType> =
  ({
     children,
     to,
     colorActiveLink,
     end,
     ...restProps
   }) => {

    const match = useMatch({ path: to, end: end || to.length === 1 });

    return (
      <Link to={to} style={{ color: match ? colorActiveLink : "inherit" }} {...restProps}>
        {children}
      </Link>
    );
  };

// Активная ссылка без CustomLink
// <NavLink className={({ isActive }: { isActive: boolean }) => isActive ? style.activeLink : ''} to={'/'} end>Home</NavLink>
// <NavLink style={({ isActive }: { isActive: boolean }) => ({ color: isActive ? 'red' : '' })} to={'/'} end>Home</NavLink>
