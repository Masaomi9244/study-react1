import { useRouter } from "next/router";
import { usePost } from "src/hooks/usePost";
import { CommentsByPostId } from "../Comments/CommentsByPostId";
import { UserByUserId } from "../User/UserByUserId";

export const Post = () => {
  const router = useRouter();
  const { data, error, isLoading } = usePost(router.query.id);

  if (isLoading) {
    return <div>ローディング中</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <UserByUserId id={data.userId} />
      <h1 className="text-3xl font-bold">{data?.title}</h1>
      <p className="text-xl text-gray-900 mt-2">{data?.body}</p>
      <h2 className="text-xl font-bold mt-10">コメント一覧</h2>
      <div className="mt-2">
        <CommentsByPostId id={data.id} />
      </div>
    </div>
  );
};
