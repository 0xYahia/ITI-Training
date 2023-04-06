import axios from "axios";

export const getTodoGroups = () =>
  axios.get("http://localhost:3001/todo-groups");
export const getTodoGroupDetails = (id) =>
  Promise.all([
    axios.get(`http://localhost:3001/todo-groups/${id}`),
    axios.get(`http://localhost:3001/todos?groupId=${id}`),
  ]).then((res) => {
    const [todoGroupDetails, todos] = res.map((r) => r.data);
    return { ...todoGroupDetails, todos };
  });

/**
 * {
 * id,
 * title,
 * description,
 * todos:[
 * {id, title, comileted},
 * ]
 * }
 */
