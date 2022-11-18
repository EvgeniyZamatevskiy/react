import React, { FC } from "react"
import { ReturnComponentType } from "types"
import { UserItemPropsType } from "./types"
import classes from "./index.module.scss"

export const UserItem: FC<UserItemPropsType> = ({id, title}): ReturnComponentType => {
  return (
    <div>
      {id}. {title}
    </div>
  )
}
