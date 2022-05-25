import styles from "../../styles/Home.module.css";
import { React, useCallback, useEffect, useState } from "react";

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getPosts = useCallback(async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!res.ok) {
        throw new Error("エラーが発生したためデータの取得に失敗しました");
      }
      const json = await res.json();
      setPosts(json);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  if (loading) {
    return <div className={styles.listGrid}>ローディング中</div>;
  }

  if (error) {
    return <div className={styles.listGrid}>{error.message}</div>;
  }

  if (posts.length === 0) {
    return <div className={styles.listGrid}>データは空です</div>;
  }

  return (
    <div className={styles.listGrid}>
      <ol>
        {posts.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ol>
    </div>
  );
};
