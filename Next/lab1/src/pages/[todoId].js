import { useRouter } from "next/router";
import React from "react";
import style from "../styles/Home.module.css";
import path from "path";
import fs from "fs/promises";

// const getData = async () => {
//   const filePthe = path.join(process.cwd(), "data", "db.json");
//   const dataJson = await fs.readFile(filePthe);
//   const data = JSON.parse(dataJson);
//   return data;
// };

export async function getStaticProps() {
  const filePthe = path.join(process.cwd(), "data", "db.json");
  const dataJson = await fs.readFile(filePthe);
  const data = JSON.parse(dataJson);

  return {
    props: {
      data: data.todos,
    },
  };
}
export async function getStaticPaths() {
  const filePthe = path.join(process.cwd(), "data", "db.json");
  const dataJson = await fs.readFile(filePthe);
  const data = JSON.parse(dataJson);

  console.log(data);
  const paths = data.todos.map((todo) => ({
    params: { todoId: todo.id.toString() },
  }));
  return {
    paths,
    fallback: true,
  };
}

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
