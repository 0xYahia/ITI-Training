import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useEffect } from "react";
import { getTodoGroupDetails } from "../api/todoGroups";

const Home = () => {
  // useEffect(() => {
  //   getTodoGroupDetails(1).then((res) => {
  //     console.log(res);
  //   });
  // }, []);
  return (
    <Box>
      <Typography variant="h1">Home page</Typography>
    </Box>
  );
};

export default Home;
