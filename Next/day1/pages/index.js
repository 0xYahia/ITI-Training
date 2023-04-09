import Link from "next/link";
import styles from "../styles/Home.module.css";
import fs from "fs/promises";
import path from "path";

export async function getStaticProps() {
  console.log("Generating...");
  const filePath = path.join(process.cwd(), "data", "dummy-data.json");
  const dataJson = await fs.readFile(filePath);
  const data = JSON.parse(dataJson);
  if (!data) {
    return {
      redirect: {
        destination: "/no-data",
      },
    };
  }
  if (data.todos.length === 0) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      todos: data.todos,
    },
    revalidate: 10,
  };
}
export default function Home(props) {
  const { todos } = props;
  return (
    <>
      <div className={styles.container}>
        <ul>
          <li>
            <p style={{ color: "green" }}>
              <Link href="/portfolio">Portfolio</Link>
            </p>
          </li>
          <li>
            <p style={{ color: "green" }}>
              <Link href="/categories">categories</Link>
            </p>
          </li>
        </ul>
      </div>
      <div className={styles.container}>
        <ul>
          {todos.map((todo) => (
            <Link href={`/${todo.id}`} key={todo.id}>
              <h1>{todo.title}</h1>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
}
