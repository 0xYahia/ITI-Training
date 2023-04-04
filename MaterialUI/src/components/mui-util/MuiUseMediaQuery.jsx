import { Box, useMediaQuery } from "@mui/material";

const MuiUseMediaQuery = () => {
  const isMedium = useMediaQuery("(min-width:900px)");
  console.log({ isMedium });
  return <Box>MuiUseMediaQuery</Box>;
};

export default MuiUseMediaQuery;
