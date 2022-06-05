import { useComment } from "src/hooks/useComment";

export const Comment = () => {
  const { comment, commentError, isLoading, isEmpty } = useComment();

  if (commentError) {
    return <div>{error.massage}</div>;
  }

  if (isLoading) {
    return <div>ローディング中</div>;
  }

  if (isEmpty) {
    return <div>データは空です</div>;
  }

  return (
    <div>
      <h1>{comment.body}</h1>
    </div>
  );
};
