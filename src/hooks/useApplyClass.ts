import { useEffect } from "react";

export const useApplyClass = (targetElement: string, className: string) => {
  useEffect(() => {
    const element = document.querySelector(targetElement);
    if (!element) return;

    element.classList.add(className);

    return () => element.classList.remove(className);
  }, [targetElement, className]);
};
