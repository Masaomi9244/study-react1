import useSWR from "swr";
import { useRouter } from "next/router";

export const usePost = () => {
  const router = useRouter();

  const fetcher = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("エラーが発生したため、データの取得に失敗しました");
    }

    const json = await response.json();
    return json;
  };

  const { data, error } = useSWR(
    router.query.id
      ? `https://jsonplaceholder.typicode.com/posts/${router.query.id}`
      : null,
    fetcher
  );

  return {
    data,
    error,
    isLoading: !data && !error,
  };
};
