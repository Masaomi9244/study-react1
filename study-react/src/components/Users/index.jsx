import Link from "next/link";
import { useUsers } from "src/hooks/useUsers";

export const Users = () => {
  const { data, error, isLoading, isEmpty } = useUsers();

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
    <ol>
      {data.map((item) => {
        return (
          <li key={item.id}>
            <Link href={`/users/${item.id}`}>
              <a>{`${item.name} (${item.email})`}</a>
            </Link>
          </li>
        );
      })}
    </ol>
  );
};
