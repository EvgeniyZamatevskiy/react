import React, { ChangeEvent, FC, forwardRef, KeyboardEvent } from "react";
import { InputPropsType } from "./types";
import classes from "./index.module.scss";

export const Input: FC<InputPropsType> = forwardRef(
  ({
     className,
     onChange,
     onKeyDown,
     setValue,
     onEnter,
     onEscape,
     error,
     additionalErrorSpanClass,
     variant,
     ...restProps
   },
   ref) => {

    const inputClass = variant ? classes[variant] : classes.input;
    const additionalInputClass = className ? className : "";
    const errorInputClass = error ? classes.errorInput : "";
    const inputClasses = `${inputClass} ${additionalInputClass} ${errorInputClass}`;
    const errorSpanClass = classes.errorSpan;
    const additionalSpanClass = additionalErrorSpanClass ? additionalErrorSpanClass : "";
    const errorSpanClasses = `${errorSpanClass} ${additionalSpanClass}`;


    const onInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
      onChange && onChange(event);

      setValue && setValue(event.currentTarget.value);
    };

    const onInputKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
      onKeyDown && onKeyDown(event);

      onEnter && event.key === "Enter" && onEnter();
      onEscape && event.key === "Escape" && onEscape();
    };

    return (
      <div className={classes.container}>
        <input
          type={"text"}
          onChange={onInputChange}
          onKeyDown={onInputKeyDown}
          ref={ref}
          className={inputClasses}
          {...restProps}
        />
        {error && <span className={errorSpanClasses}>{error}</span>}
      </div>
    );
  });
