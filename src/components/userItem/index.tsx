import React, { FC } from "react";
import { UserItemPropsType } from "./types";
import classes from "./index.module.scss";

export const UserItem: FC<UserItemPropsType> = ({ id, title }) => {
  return (
    <div>
      {id}. {title}
    </div>
  );
};
