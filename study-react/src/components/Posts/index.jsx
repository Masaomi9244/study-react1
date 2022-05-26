import styles from "../../styles/Home.module.css";
import { React, useCallback, useEffect, useReducer } from "react";

const initialState = {
  data: [],
  loading: true,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "end":
      return {
        ...state,
        data: action.data,
        loading: false,
      };
    case "error":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default: {
      throw new Error("no such action type!");
    }
  }
};

export const Posts = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getPosts = useCallback(async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!res.ok) {
        throw new Error("エラーが発生したためデータの取得に失敗しました");
      }
      const json = await res.json();
      dispatch({ type: "end", data: json });
    } catch (error) {
      ({ type: error, error });
    }
  }, []);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  if (state.loading) {
    return <div className={styles.listGrid}>ローディング中</div>;
  }

  if (state.error) {
    return <div className={styles.listGrid}>{state.error.message}</div>;
  }

  if (state.data.length === 0) {
    return <div className={styles.listGrid}>データは空です</div>;
  }

  return (
    <div className={styles.listGrid}>
      <ol>
        {state.data.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ol>
    </div>
  );
};
