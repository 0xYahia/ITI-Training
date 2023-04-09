import React from "react";
import path from "path";
import fs from "fs/promises";

const ProductPage = ({ loadedTodo }) => {
  if (!loadedTodo) {
    return "loading....";
  }
  return (
    <div>
      <h1>Todo: {loadedTodo.title}</h1>
    </div>
  );
};

export async function getStaticProps(context) {
  const { params } = context;
  const todoId = +params.pid;
  const data = await getData();
  const todo = data.todos.find((todo) => todo.id === todoId);
  if (!todo) return { notFound: true };

  console.log("todo", todo);
  return {
    props: {
      loadedTodo: todo,
    },
  };
}
async function getData() {
  const filePath = path.join(process.cwd(), "data", "dummy-data.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  return data;
}
export async function getStaticPaths() {
  const data = await getData();
  const ids = data.todos.map((todo) => todo.id);
  const paramsWithPaths = ids.map((id) => ({ params: { pid: id.toString() } }));
  console.log(
    "🚀 ~ file: [pid].js:41 ~ getStaticPaths ~ paramsWithPaths:",
    paramsWithPaths
  );
  return {
    paths: paramsWithPaths,
    fallback: true,
  };
}

export default ProductPage;
