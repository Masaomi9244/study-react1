import useSWR from "swr";

const fetcher = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("エラーが発生したため、データの取得に失敗しました");
  }
  return response.json();
};

export const useComments = () => {
  const { data: comments, error: commentsError } = useSWR(
    "https://jsonplaceholder.typicode.com/comments",
    fetcher
  );
  return {
    comments,
    commentsError,
    isLoading: !comments && !commentsError,
    isEmpty: comments && comments.length === 0,
  };
};
