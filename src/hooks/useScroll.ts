import React from "react";

export const useScroll = () => {
  const [scroll, setScroll] = React.useState(0);

  const resetScroll = () => {
    window.scrollTo(0, 0);
  };

  React.useEffect(() => {
    const updatePosition = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener("scroll", updatePosition);
    updatePosition();

    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return { scroll, resetScroll };
};
