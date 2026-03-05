function handleApiError<T>(error: unknown, code?: number): _IApiResponse<T> {
  return {
    data: null,
    message: error instanceof Error ? error.message : 'Unknown error',
    code: code ?? 500,
  };
}

export const fetcher = async <T>(
  url: string,
  method: RequestInit['method'] = 'GET',
  isr: RequestInit['next'] = { revalidate: 60 },
  cache: RequestCache = 'no-store',
): Promise<_IApiResponse<T>> => {
  try {
    const options: RequestInit = {
      method,
      cache,
      headers: {
        'Content-Type': 'application/json',
      },
      next: isr,
    };

    const response = await fetch(`${process.env.API_BASE_URL}/${url}`, options);

    if (!response.ok) {
      const message = await response.text();
      const code = response.status;
      return handleApiError<T>(new Error(message), code);
    }

    const data = (await response.json()) as _IApiResponse<T>;

    return data;
  } catch (err) {
    return handleApiError<T>(err);
  }
};
