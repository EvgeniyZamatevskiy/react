import { createContext, useContext } from "react";
import { ExampleContextType } from "./types";

export const ExampleContext = createContext<ExampleContextType>({
  count: 0,
  setCount() {
    console.log("ExampleContext provider missing");
  },
});

export const useExampleContext = () => useContext(ExampleContext);
