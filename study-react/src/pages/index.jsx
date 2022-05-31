import Head from "next/head";
import styles from "src/styles/Home.module.css";
import React from "react";
import { Header } from "src/components/Header";

const Index = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>IndexPage</title>
      </Head>
      <Header />
      <div className={styles.center}>
        <h1>Next.jsで学ぶReact講座</h1>
        <p>JsonPlaceholderのAPIを色々叩いてみるよ!</p>
      </div>
    </div>
  );
};

export default Index;
