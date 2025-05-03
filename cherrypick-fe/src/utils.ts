export const fetchWrapper = async (
  url: string,
  options: RequestInit = {},
): Promise<{ status: number; data: object }> => {
  try {
    const response = await fetch(url, options);

    const status = response.status; // Capture the status code
    const data = await response.json().catch(() => null); // Parse JSON or return null if parsing fails

    if (!response.ok) {
      return {
        status,
        data: data?.message || `HTTP error! Status: ${status}`,
      };
    }

    return { status, data };
  } catch (error) {
    if (error instanceof Error) {
      console.error("Fetch error:", error.message);
    } else {
      console.error("Fetch error:", error);
    }
    throw error;
  }
};

export const get = async (
  url: string,
  headers: Record<string, string> = {},
) => {
  return fetchWrapper(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  });
};

export const post = async (
  url: string,
  body: object,
  headers: Record<string, string> = {},
) => {
  return fetchWrapper(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: JSON.stringify(body),
  });
};

export const put = async (
  url: string,
  body: object,
  headers: Record<string, string> = {},
) => {
  return fetchWrapper(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: JSON.stringify(body),
  });
};

export const del = async (
  url: string,
  headers: Record<string, string> = {},
) => {
  return fetchWrapper(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  });
};

export const getBackendUrl = () => {
  return process.env.NEXT_PUBLIC_BACKEND_URL!;
};
