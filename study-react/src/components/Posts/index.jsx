import styles from "../../styles/Home.module.css";
import { usePosts } from "../../hooks/usePosts";

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
          return <li key={item.id}>{item.title}</li>;
        })}
      </ol>
    </div>
  );
};
