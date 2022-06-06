import Link from "next/link";
import { useComments } from "src/hooks/useFetchArray";

export const Comments = () => {
  const { data, error, isLoading, isEmpty } = useComments();
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
