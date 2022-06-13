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
    <ul className="space-y-2">
      {data.map((item) => {
        return (
          <li key={item.id} className="border-b pb-2">
            <Link href={`/comments/${item.id}`} prefetch={false}>
              <a className="block hover:text-blue-500">{item.body}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
