import path from "path";
import Link from "next/link";
import style from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import fs from "fs/promises";

export async function getStaticProps() {
  const filePthe = path.join(process.cwd(), "data", "db.json");
  const dataJson = await fs.readFile(filePthe);
  const data = JSON.parse(dataJson);

  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      todos: data.todos,
    },
    revalidate: 20,
  };
}
export default function Home(props) {
  const { todos } = props;
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchItems() {
      const response = await fetch(`http://localhost:3001/todos`);
      const data = await response.json();
      setItems(data);
    }
    fetchItems();
  }, []);

  let newItems;
  let handleDelete = (id) => {
    fetch(`http://localhost:3001/todos/${id}`, { method: "delete" })
      .then((res) => res.json())
      .then((json) => {
        newItems = items.filter((item) => item.id !== +json.id);
      });
    setItems(newItems);
  };

  // const handleEdit = async (id, newTitle) => {
  //   const updatedItems = items.map((item) => {
  //     if (item.id === id) {
  //       return { ...item, title: newTitle };
  //     } else {
  //       return item;
  //     }
  //   });
  //   setItems(updatedItems);
  //   const data = { todos: updatedItems };
  //   const dataJson = JSON.stringify(data);
  //   const filePath = path.join(process.cwd(), "data", "db.json");
  //   await fs.writeFile(filePath, dataJson);
  // };

  return (
    <main className={style.main}>
      <h1 className={style.title}>To-Do List</h1>
      <ul className={style.ul}>
        {todos.map((todo) => (
          <li key={todo.id} className={style.li}>
            <Link href={`/${todo.id}`} className={style.link}>
              {todo.title}
            </Link>
            <div className={style.buttons}>
              <button
                className={style.deleteButton}
                onClick={() => handleDelete(todo.id)}
              >
                Delete
              </button>
              <button
                className={style.editButton}
                // onClick={() => handleEdit(todo.id)}
              >
                Edit
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
