import { useRouter } from "next/router";
import React from "react";
import style from "../styles/Home.module.css";
import path from "path";

// export async function getStaticProps() {
//   const filePath = path.join(process.cwd())
// }

const SingleTodo = () => {
  const router = useRouter();
  const { todoId } = router.query;
  return (
    <div className={style.main}>
      <h1 className={style.todoTitle}>Todo {todoId}</h1>
    </div>
  );
};

export default SingleTodo;
