import styles from "../../styles/Home.module.css";
import { Header } from "../../components/Header";
import React from "react";
import { Post } from "../../components/post";

const PostId = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Post />
    </div>
  );
};

export default PostId;
