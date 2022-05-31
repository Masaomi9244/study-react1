import classes from "src/styles/Home.module.css";
import { Header } from "src/components/Header";
import React from "react";
import { Post } from "src/components/post";

const PostId = () => {
  return (
    <div className={classes.container}>
      <Header />
      <Post />
    </div>
  );
};

export default PostId;
