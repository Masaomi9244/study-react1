import { useUser } from "src/hooks/useUser";
import { PostsByUserId } from "../Posts/PostsByUserId";

export const User = () => {
  const { data, error, isLoading, isEmpty } = useUser();

  if (isLoading) {
    return <div>ローディング中</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (isEmpty) {
    return <div>データは空です</div>;
  }

  return (
    <div>
      <h1>{data.name}</h1>
      <h2>詳細</h2>
      <ul>
        <li>{data.email}</li>
        <li>{data.address.city}</li>
        <li>{data.phone}</li>
        <li>{data.website}</li>
        <li>{data.company.name}</li>
      </ul>
      <h2>投稿</h2>
      <PostsByUserId id={data.id} />
    </div>
  );
};
