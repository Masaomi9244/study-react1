import { useRouter } from "next/router";
import useSWR from "swr";

export const useComment = () => {
  const router = useRouter();
  const fetcher = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("エラーが発生したため、データの取得に失敗しました");
    }

    return response.json();
  };

  const { data: comment, error: commentError } = useSWR(
    `https://jsonplaceholder.typicode.com/comments/${router.query.id}`,
    fetcher
  );

  return {
    comment,
    commentError,
    isLoading: !comment && !error,
    isEmpty: comment && comment.length > 0,
  };
};
