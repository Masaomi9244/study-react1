import { useRouter } from "next/router";
import useSWR from "swr";

export const useUser = () => {
  const router = useRouter();
  const fetcher = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("エラーが発生したため、データの取得に失敗しました");
    }
    return response.json();
  };

  const { data: user, error: userError } = useSWR(
    router.query.id
      ? `https://jsonplaceholder.typicode.com/users/${router.query.id}`
      : null,
    fetcher
  );

  return {
    user,
    error: userError,
    isLoading: !user && !userError,
  };
};
