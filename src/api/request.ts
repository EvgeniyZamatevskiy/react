type RequestMethod = "GET" | "POST"

export const request = async <T>(url: string, method?: RequestMethod, data?: object, apikey?: string): Promise<T> => {
  try {
    const response = await fetch(url, {
      method: method ?? "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apikey!
      },
      body: JSON.stringify(data)
    });

    // @ts-ignore
    return await response.json<T>();
  } catch (e) {
    throw new Error("An error occurred during the request to " + url);
  }
};
