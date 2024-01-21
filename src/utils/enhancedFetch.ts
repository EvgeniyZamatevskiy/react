export const enhancedFetch = async <T>(
  url: string | URL,
  options: RequestInit
) => {
  const startTime = Date.now();
  console.log(`About to hit ${url}`);

  try {
    const response = await fetch(url, options);
    const { status, statusText, ok } = response;

    if (!ok) {
      throw new Error(`Server error: ${status} - ${statusText} - ${url}`);
    }

    const json: T = await response.json();
    return json;
  } catch (error: any) {
    console.error("An error occurred while executing the request:", {
      error: error.message,
    });
  } finally {
    console.log(`Hit ${url} in ${Date.now() - startTime} ms`);
  }
};
