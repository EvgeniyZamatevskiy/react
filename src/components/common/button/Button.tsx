import clsx from "clsx";
import { ButtonPropsType } from "./types";

const classes = {
  default:
    "inline-flex items-center justify-center text-center gap-2.5 py-[21px] rounded-[10px] leading-3 text-black-primary font-semibold disabled:text-[#828282]",
  contained: "bg-[#FFD100] disabled:bg-[#E0E0E0]",
  outlined: "border border-[#FFD100] disabled:border-[#E0E0E0]",
  small: "text-xs h-10 px-6",
  large: "text-base h-[50px] px-7",
};

export const Button: React.FC<ButtonPropsType> = ({
  variant = "contained",
  size = "large",
  disabled,
  className,
  children,
  ...restProps
}) => {
  const isContained = variant === "contained";
  const isOutlined = variant === "outlined";
  const isSmall = size === "small";
  const isLarge = size === "large";

  return (
    <button
      className={clsx(classes.default, className, {
        [classes.contained]: isContained,
        [classes.outlined]: isOutlined,
        [classes.small]: isSmall,
        [classes.large]: isLarge,
      })}
      disabled={disabled}
      {...restProps}
    >
      {children}
    </button>
  );
};
