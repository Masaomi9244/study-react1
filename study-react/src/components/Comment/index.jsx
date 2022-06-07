import { useComment } from "src/hooks/useComment";
import { PostByCommentId } from "../Post/PostByCommentId";

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
      <h1>{data.body}</h1>
      <ul>
        <li>{data.name}</li>
        <li>{data.email}</li>
      </ul>
      <h2>元の記事</h2>
      <PostByCommentId id={data.postId} />
    </div>
  );
};
