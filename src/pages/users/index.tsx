import React, { FC } from "react"
import { UsersList } from "components"
import { ReturnComponentType } from "types"
import classes from "./index.module.scss"

export const Users: FC = (): ReturnComponentType => {
  return (
    <div>
      {/*UsersForm*/}
      {/*UsersFilter*/}
      <UsersList/>
      {/*Pagination*/}
    </div>
  )
}
