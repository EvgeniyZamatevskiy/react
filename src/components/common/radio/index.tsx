import React, { ChangeEvent, FC } from "react";
import { UniversalRadioPropsType } from "./types";
import classes from "./index.module.scss";

export const Radio: FC<UniversalRadioPropsType> =
  ({
     className,
     labelClassName,
     options,
     name,
     value,
     onChange,
     setOption,
     variant,
     spanClassName,
     ...restProps
   }) => {

    const radioClass = variant ? classes[variant] : classes.radio;
    const additionalRadioClass = className ? className : "";
    const radioClasses = `${radioClass} ${additionalRadioClass}`;
    const labelClass = classes.label;
    const additionalLabelClass = labelClassName ? labelClassName : "";
    const labelClasses = `${labelClass} ${additionalLabelClass}`;
    const spanClass = classes.span;
    const additionalSpanClass = spanClassName ? spanClassName : "";
    const spanClasses = `${spanClass} ${additionalSpanClass}`;

    const optionsRender = options.map(option => {

      const onRadioChange = (event: ChangeEvent<HTMLInputElement>): void => {
        onChange && onChange(event);

        setOption && setOption(Number(event.currentTarget.value));
      };

      return (
        <label key={option.id} className={labelClasses}>
          <input
            type={"radio"}
            className={radioClasses}
            name={name}
            value={option.id}
            checked={option.id === value}
            onChange={onRadioChange}
            {...restProps}
          />
          <span className={spanClasses}>{option.value}</span>
        </label>
      );
    });

    return <>{optionsRender}</>;
  };
