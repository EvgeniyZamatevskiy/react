import React, { ChangeEvent, KeyboardEvent, FC, forwardRef } from "react";
import { TextareaPropsType } from "./types";
import classes from "./index.module.scss";

export const Textarea: FC<TextareaPropsType> = forwardRef(
  ({
     className,
     onChange,
     onKeyDown,
     setValue,
     onEnter,
     onEscape,
     variant,
     ...restProps
   },
   ref) => {

    const textareaClass = variant ? classes[variant] : classes.textarea;
    const additionalTextareaClass = className ? className : "";
    const textareaClasses = `${textareaClass} ${additionalTextareaClass}`;

    const onTextareaChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
      onChange && onChange(event);

      setValue && setValue(event.currentTarget.value);
    };

    const onTextareaKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>): void => {
      onKeyDown && onKeyDown(event);

      onEnter && event.key === "Enter" && onEnter();
      onEscape && event.key === "Escape" && onEscape();
    };

    return (
      <textarea
        onChange={onTextareaChange}
        onKeyDown={onTextareaKeyDown}
        ref={ref}
        className={textareaClasses}
        {...restProps}
      />
    );
  });
