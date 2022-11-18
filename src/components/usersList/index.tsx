import React, { FC } from "react"
import { ReturnComponentType, UserType } from "types"
import { UsersListPropsType } from "./types"
import { UserItem } from "components"
import classes from "./index.module.scss"

export const UsersList: FC<UsersListPropsType> = ({}): ReturnComponentType => {

  const users: UserType[] = [
    {id: 1, title: "title"}
  ]

  const usersRender = users.map(({id, title}) => {
    return <UserItem key={id} id={id} title={title}/>
  })

  if (!users.length) {
    return <h1>Пользователи не найдены</h1>
  }

  return (
    <div>
      <h1>Список пользователей</h1>
      {usersRender}
    </div>
  )
}
