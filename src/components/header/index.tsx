import React, { FC } from "react"
import { ReturnComponentType } from "types"
import { HeaderPropsType } from "./types"
import classes from "./index.module.scss"

export const Header: FC<HeaderPropsType> = (): ReturnComponentType => {
  return (
    <header>
      Header
    </header>
  )
}
