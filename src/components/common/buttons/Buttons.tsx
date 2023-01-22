import React from "react";
import clsx from "clsx";
import styled from "styled-components";

const TabsWrapper = styled.div`
  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow-x: auto;
  overflow-y: visible;
  position: relative;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Button = styled.li`
  position: relative;
  transition: color 0.3s ease-out;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    border-bottom: 2px solid currentColor;
    transition: transform 0.3s ease-out;
    transform: scaleX(0);
    z-index: 1;
  }

  &.active::after {
    transform: scaleX(1);
  }
`;

type TabsProps = {
  buttons: { title: string; id: number }[]
  className?: string
  activeButtonIndex: number
  handleButtonClick: (index: number) => void
}

export const Buttons: React.FC<TabsProps> = ({ buttons, activeButtonIndex = 0, className, handleButtonClick }) => {
  if (!buttons) {
    return null;
  }

  return (
    <TabsWrapper className={clsx("text-gray-350 -mx-4 xs:mx-0", className)}>
      <ul className="flex border-b-2 border-current w-fit min-w-full px-4 xs:px-0">
        {buttons.map(({ id, title }, index) => (
          <Button
            key={id}
            className={clsx(
              "hover:text-blue-750 cursor-pointer pb-1.5 font-sans pr-[1px] pl-[1px] mr-[16px] xs:mr-[24px] sm:mr-[30px] md:mr-[36] lg:mr-[42px]",
              {
                "text-blue-750 active": activeButtonIndex === index,
                "text-black-primary": activeButtonIndex !== index
              }
            )}
            onClick={() => handleButtonClick(index)}
          >
            <span
              className={clsx("font-medium text-[14px] lg:text-[16px] leading-none whitespace-nowrap", {
                "font-semibold": activeButtonIndex === index
              })}
            >
              {title}
            </span>
          </Button>
        ))}
      </ul>
    </TabsWrapper>
  );
};
