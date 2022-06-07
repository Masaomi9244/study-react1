import useSWR from "swr";

export const usePost = (id) => {
  const fetcher = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("エラーが発生したため、データの取得に失敗しました");
    }

    const json = await response.json();
    return json;
  };

  const { data, error } = useSWR(
    id ? `https://jsonplaceholder.typicode.com/posts/${id}` : null,
    fetcher
  );

  return {
    data,
    error,
    isLoading: !data && !error,
  };
};
