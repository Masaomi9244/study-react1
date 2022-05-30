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

  const { data: post, error: postError } = useSWR(
    router.query.id
      ? `https://jsonplaceholder.typicode.com/posts/${router.query.id}`
      : null,
    fetcher
  );

  const { data: user, error: userError } = useSWR(
    post?.userId
      ? `https://jsonplaceholder.typicode.com/users/${post.userId}`
      : null,
    fetcher
  );

  console.log(post, user);
  return {
    post,
    user,
    error: postError || userError,
    isLoading: !post && !postError && !user && !userError,
  };
};
