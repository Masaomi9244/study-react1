import useSWR from "swr";

const fetcher = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("エラーが発生したため、データの取得に失敗しました");
  }
  return response.json();
};

const useFetchArray = (url) => {
  const { data, error } = useSWR(url, fetcher);

  return {
    data,
    error,
    isLoading: !data && !error,
    isEmpty: data && data.length === 0,
  };
};

const API_URL = "https://jsonplaceholder.typicode.com";

// posts
export const usePosts = () => {
  return useFetchArray(`${API_URL}/posts`);
};

// users
export const usePostsByUserId = (id) => {
  return useFetchArray(id ? `${API_URL}/posts?userId=${id}` : null);
};

export const useUsers = () => {
  return useFetchArray(`${API_URL}/users`);
};

// comments
export const useComments = () => {
  return useFetchArray(`${API_URL}/comments`);
};

export const useCommentsByPostId = (id) => {
  return useFetchArray(id ? `${API_URL}/comments?postId=${id}` : null);
};
