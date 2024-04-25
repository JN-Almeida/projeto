export async function fetchData<T = unknown>(
  input: RequestInfo | URL,
  init?: RequestInit | undefined
): Promise<T> {
  const response = await fetch(
    `https://wefit-movies.vercel.app/api/${input}`,
    init
  );
  const data = await response.json();
  return data as T;
}
