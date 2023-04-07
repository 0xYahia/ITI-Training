import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { getTodoGroups } from "../api/todoGroups";
import TodoGroupCard from "../components/todoGroups/TodoGroupCard";
import { Stack } from "@mui/material";

const Groups = () => {
  const [todoGroups, setTodoGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    setError(null);
    getTodoGroups()
      .then((res) => {
        setTodoGroups(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  console.log(todoGroups);
  if (loading) {
    return <Box>Loading..</Box>;
  }
  if (error) {
    return (
      <Box sx={{ color: (theme) => theme.palette.error.main }}>errror</Box>
    );
  }
  return (
    <Box>
      <Typography variant="h1">Todo groups</Typography>
      <Stack component="ul" direction="row" spacing="15px">
        {todoGroups.map((todoGroup) => (
          <Box key={todoGroup.title} component="li">
            <TodoGroupCard {...todoGroup} />
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default Groups;

// [
//   {}
// ]
/**
 * {
 * todoGroups []
 * pagination {}
 * }
 */
