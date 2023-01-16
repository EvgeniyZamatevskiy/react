import React, { FC } from "react";
import { ButtonPropsType } from "./types";
import classes from "./index.module.scss";

export const Button: FC<ButtonPropsType> =
  ({
     className,
     variant,
     disabled,
     ...restProps
   }) => {

    const buttonClass = variant ? classes[variant] : classes.button;
    const additionalButtonClass = className ? className : "";
    const buttonDisabledClass = disabled ? classes.disabled : "";
    const buttonClasses = `${buttonClass} ${additionalButtonClass} ${buttonDisabledClass}`;

    return <button className={buttonClasses} {...restProps} />;
  };
