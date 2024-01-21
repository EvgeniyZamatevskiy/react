import clsx from "clsx";
import close from "assets/icons/close.svg";
import { useApplyClass } from "hooks";
import { ModalPropsType } from "./types";

export const Modal: React.FC<ModalPropsType> = ({
  children,
  deactivateVisibleModal,
  isShowCloseIcon = true,
  classNameCloseIcon,
  classNameContent,
  classNameModal,
}) => {
  useApplyClass("body", "overflow-hidden");

  return (
    <div
      className={clsx(
        "w-full h-full bg-dark-transparent fixed top-0 left-0 z-[100]",
        classNameModal
      )}
      onClick={deactivateVisibleModal}
    >
      <div
        className={clsx(
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
          classNameContent
        )}
        onClick={(event) => event.stopPropagation()}
      >
        {isShowCloseIcon && (
          <button
            className={clsx(
              "absolute right-7 top-4 md:top-[25px] z-50 h-9 w-9 transition-all opacity-30 hover:opacity-100",
              classNameCloseIcon
            )}
            onClick={deactivateVisibleModal}
          >
            <img src={close} alt="no cover" />
          </button>
        )}
        {children}
      </div>
    </div>
  );
};
