import Head from "next/head";
import { Header } from "src/components/Header";
import { Comments as CommentsComponent } from "src/components/Comments";

const Comments = () => {
  return (
    <div>
      <Head>
        <title>CommentsPage</title>
      </Head>
      <Header />
      <CommentsComponent />
    </div>
  );
};

export default Comments;
