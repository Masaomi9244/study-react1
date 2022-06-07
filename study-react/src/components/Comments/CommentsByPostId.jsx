import Link from "next/link";
import { useCommentsByPostId } from "src/hooks/useFetchArray";

export const CommentsByPostId = (props) => {
  const { data, error, isLoading, isEmpty } = useCommentsByPostId(props.id);

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
    <ol>
      {data.map((item) => {
        return (
          <li key={item.id}>
            <Link href={`/comments/${item.id}`}>
              <a>{item.body}</a>
            </Link>
          </li>
        );
      })}
    </ol>
  );
};