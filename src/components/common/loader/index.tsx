import React, { FC } from "react"
import { ReturnComponentType } from "types"
import classes from "./index.module.scss"

export const Loader: FC = (): ReturnComponentType => {
  return (
    <div className={classes.loader}>
      <div className={classes.bounceOne}></div>
      <div className={classes.bounceTwo}></div>
      <div className={classes.bounceThree}></div>
    </div>
  )
}
