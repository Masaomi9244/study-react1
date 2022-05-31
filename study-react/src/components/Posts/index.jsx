import styles from "src/styles/Home.module.css";
import { usePosts } from "src/hooks/usePosts";
import Link from "next/link";

export const Posts = () => {
  const { data, error, isLoading, isEmpty } = usePosts();

  if (isLoading) {
    return <div className={styles.listGrid}>ローディング中</div>;
  }

  if (error) {
    return <div className={styles.listGrid}>{error.message}</div>;
  }

  if (isEmpty) {
    return <div className={styles.listGrid}>データは空です</div>;
  }

  return (
    <div className={styles.listGrid}>
      <ol>
        {data.map((item) => {
          return (
            <li key={item.id}>
              <Link href={`/${item.id}`}>
                <a>{item.title}</a>
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
};
