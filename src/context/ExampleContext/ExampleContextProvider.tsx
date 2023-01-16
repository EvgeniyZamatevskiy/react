import { FC, useState } from "react";
import { ExampleContext } from "./ExampleContext";
import { ExampleContextProviderPropsType } from "./types";

export const ExampleContextProvider: FC<ExampleContextProviderPropsType> = ({ children }) => {

  const [count, setCount] = useState(0);

  return (
    <ExampleContext.Provider value={{ count, setCount }}>
      {children}
    </ExampleContext.Provider>
  );
};
