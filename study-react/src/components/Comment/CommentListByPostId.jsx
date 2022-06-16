import Link from "next/link";
import { useFetchArray } from "src/hooks/useFetchArray";
import { API_URL } from "src/utils/const";

export const CommentListByPostId = (props) => {
  const { data, error, isLoading, isEmpty } = useFetchArray(
    props.id ? `${API_URL}/posts/${props.id}/comments` : null
  );
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
            <Link href={`/comments/${item.id}`}>
              <a className="block hover:text-blue-500">{item.body}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
