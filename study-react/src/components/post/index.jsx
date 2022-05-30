import styles from "../../styles/Home.module.css";
import { usePost } from "../../hooks/usePost";

export const Post = () => {
  const { post, user, error, isLoading } = usePost();

  if (isLoading) {
    return <div className={styles.listGrid}>ローディング中</div>;
  }

  if (error) {
    return <div className={styles.listGrid}>{error.message}</div>;
  }

  return (
    <div>
      <div>
        <h1>{post?.title}</h1>
        <p>{post?.body}</p>
        {user?.name ? <div>Created by {user.name}</div> : null}
      </div>
    </div>
  );
};