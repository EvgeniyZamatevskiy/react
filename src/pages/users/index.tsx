import React, { FC, useState } from "react";
import { UsersList } from "components";
import classes from "./index.module.scss";
import { UserType } from "types";

export const Users: FC = () => {

  const [users, setUsers] = useState<UserType[]>([
    { id: 1, title: "title" },
    { id: 2, title: "title2" }
  ]);

  return (
    <div>
      {/*UsersForm*/}
      {/*UsersFilter*/}
      <UsersList users={users} />
      {/*Pagination*/}
    </div>
  );
};
