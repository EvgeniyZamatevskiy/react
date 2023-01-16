import React, { FC } from "react";
import { Button } from "components";
import { AlertPropsType } from "./types";
import warning from "assets/icons/warning.svg";
import error from "assets/icons/error.svg";
import info from "assets/icons/info.svg";
import success from "assets/icons/success.svg";
import classes from "./index.module.scss";

export const Alert: FC<AlertPropsType> = ({ message, onCloseAlertClick, type }) => {
  return (
    <div className={`${classes.alert} ${classes[type]}`}>
      <div className={classes.body}>
        <div className={classes.icon}>
          {type === "warning" && <img src={warning} alt="warning" />}
          {type === "error" && <img src={error} alt="error" />}
          {type === "info" && <img src={info} alt="info" />}
          {type === "success" && <img src={success} alt="success" />}
        </div>
        <div className={classes.message}>{message}</div>
      </div>
      <Button className={classes.closeAlertButton} onClick={onCloseAlertClick}>
        &#10006;
      </Button>
    </div>
  );
};
