import Link from "next/link";
import { useComments } from "src/hooks/useComments";

export const Comments = () => {
  const { comments, commentsError, isLoading, isEmpty } = useComments();
  if (commentsError) {
    return <div>{commentsError.message}</div>;
  }

  if (isLoading) {
    return <div>ローディング中</div>;
  }

  if (isEmpty) {
    return <div>データは空です</div>;
  }

  return (
    <ol>
      {comments.map((comment) => {
        return (
          <li key={comment.id}>
            <Link href={`/comments/${comment.id}`}>
              <a>{comment.body}</a>
            </Link>
          </li>
        );
      })}
    </ol>
  );
};
