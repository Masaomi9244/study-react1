import useSWR from "swr";

export const UserByUserId = (props) => {
  const fetcher = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("エラーが発生したため、データの取得に失敗しました");
    }

    const json = await response.json();
    return json;
  };

  const { data, error } = useSWR(
    props.id ? `https://jsonplaceholder.typicode.com/users/${props.id}` : null,
    fetcher
  );

  if (!data && !error) {
    return <div>ローディング中</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return <div className="text-lg">Created by {data.name}</div>;
};
