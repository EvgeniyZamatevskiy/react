import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { SectionButtonsType, SlugType } from "types";

type UseActiveButtonType = {
  activeButtonIndex: number
  activeButtonSlug: SlugType
  handleButtonClick: (index: number) => void
}

export const useActiveButton = (sectionButtons: SectionButtonsType[]): UseActiveButtonType => {
  const [searchParams, setSearchParams] = useSearchParams();
  const buttonParam = searchParams.get("button");

  const [activeButton, setActiveButton] = useState<SectionButtonsType>(sectionButtons[0]);

  const activeButtonSlug = activeButton?.slug;
  const activeButtonIndex = sectionButtons.findIndex((button) => button === activeButton);

  const handleButtonClick = (index: number) => {
    const newButton = sectionButtons[index];

    if (newButton) {
      searchParams.set("button", newButton.slug);
      setSearchParams(searchParams);
    }
  };

  useEffect(() => {
    setActiveButton(sectionButtons.find(({ slug }) => slug === buttonParam) ?? sectionButtons[0]);
  }, [buttonParam]);

  return { activeButtonIndex, activeButtonSlug, handleButtonClick };
};
