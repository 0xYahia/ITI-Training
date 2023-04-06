import axios from "axios";

export const getTodoGroups = () =>
  axios.get("http://localhost:3001/todo-groups");
export const getTodoGroupDetails = () =>
  Promise.all([
    axios.get(`http://localhost:3001/todo-groups/${id}`),
    axios.get(`http://localhost:3001/todos?groupId=${id}`),
  ]);
