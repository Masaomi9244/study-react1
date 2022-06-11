import { useComment } from "src/hooks/useComment";
import { PostByCommentId } from "src/components/Post/PostByCommentId";

export const Comment = () => {
  const { data, error, isLoading, isEmpty } = useComment();
  if (error) {
    return <div>{error.message}</div>;
  }

  if (isLoading) {
    return <div>ローディング中</div>;
  }

  if (isEmpty) {
    return <div>データは空です</div>;
  }

  return (
    <div>
      <div className="text-lg">
        {data.name} {data.email}
      </div>
      <h1 className="text-3xl font-bold">{data.body}</h1>
      <h2 className="text-xl font-bold mt-10">元の記事</h2>
      <div className="mt-2">
        <PostByCommentId id={data.postId} />
      </div>
    </div>
  );
};
