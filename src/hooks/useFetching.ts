import { useState } from "react";

export const useFetching = (callback: () => void) => {

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const query = async () => {
    try {
      setIsLoading(true);
      await callback();
    } catch (error: any) {
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return [query, isLoading, errorMessage] as const;
};
