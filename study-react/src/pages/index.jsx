import Head from "next/head";
import React from "react";
import { Header } from "src/components/Header";

const Index = () => {
  return (
    <div>
      <Head>
        <title>IndexPage</title>
      </Head>
      <Header />
      <div>
        <h1>Next.jsで学ぶReact講座</h1>
        <p>JsonPlaceholderのAPIを色々叩いてみるよ!</p>
      </div>
    </div>
  );
};

export default Index;
