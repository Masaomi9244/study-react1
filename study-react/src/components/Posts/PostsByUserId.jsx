import { usePostsByUserId } from "src/hooks/useFetchArray";
import Link from "next/link";

export const PostsByUserId = (props) => {
  const { data, error, isLoading, isEmpty } = usePostsByUserId(props.id);

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
    <ul className="space-y-4">
      {data.map((item) => {
        return (
          <li key={item.id}>
            <Link href={`/posts/${item.id}`}>
              <a className="block group">
                <h1 className="font-bold group-hover:text-blue-500">
                  {item.title}
                </h1>
                <p className="text-lg  text-gray-500 group-hover:text-blue-400">
                  {item.body}
                </p>
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
