import React, { ChangeEvent, FC } from "react";
import { SelectPropsType } from "./types";
import classes from "./index.module.scss";

export const Select: FC<SelectPropsType> =
  ({
     className,
     optionClassName,
     options,
     onChange,
     setValue,
     defaultValue,
     variant,
     ...restProps
   }) => {

    const selectClass = variant ? classes[variant] : classes.select;
    const additionalSelectClass = className ? className : "";
    const selectClasses = `${selectClass} ${additionalSelectClass}`;
    const optionClass = classes.option;
    const additionalOptionClass = optionClassName ? optionClassName : "";
    const optionClasses = `${optionClass} ${additionalOptionClass}`;

    const onSelectChange = (event: ChangeEvent<HTMLSelectElement>): void => {
      setValue && setValue(Number(event.currentTarget.value));

      onChange && onChange(event);
    };

    const optionsRender = options.map(({ id, name }) => {
      return <option key={id} className={optionClasses} value={id}>{name}</option>;
    });

    return (
      <select className={selectClasses} onChange={onSelectChange} {...restProps}>
        {defaultValue && <option value={0} disabled>{defaultValue}</option>}
        {optionsRender}
      </select>
    );
  };
