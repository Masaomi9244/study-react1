import { useRouter } from "next/router";
import useSWR from "swr";

const Comment = () => {
  const router = useRouter();

  const fetcher = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("エラーが発生しましたーーー");
    }
    return response.json;
  };

  const { data: comment, error: commentError } = useSWR(
    `https://jsonplaceholder.typicode.com/comments/${router.query.id}`,
    fetcher
  );

  if (comment && comment.length === 0) {
    return <div>データは空です。</div>;
  }

  if (commentError) {
    return <div>{commentError.message}</div>;
  }

  return (
    <div>
      {/* <h1>{comment.body}</h1>
      <div>{comment.email}</div> */}
    </div>
  );
};

export default Comment;
