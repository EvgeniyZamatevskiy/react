import React, { FC } from "react";
import { UsersListPropsType } from "./types";
import { UserItem } from "components";
import classes from "./index.module.scss";

export const UsersList: FC<UsersListPropsType> = ({ users }) => {

  if (!users.length) {
    return <h1>Пользователи не найдены</h1>;
  }

  return (
    <div>
      <h1>Список пользователей</h1>
      {users.map(({ id, title }) => {
        return <UserItem key={id} id={id} title={title} />;
      })}
    </div>
  );
};
