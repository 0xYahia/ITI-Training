import { Stack, Typography } from "@mui/material";
import React from "react";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

const AppLogo = (props) => {
  const { sx } = props;
  return (
    <Stack
      sx={sx}
      direction="row"
      alignItems="center"
      justifyContent={{ xs: "center", md: "flex-start" }}
      flex={{ xs: 1, md: 0 }}
    >
      <FormatListBulletedIcon sx={{ mr: 1 }} />
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 2,
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        Todo
      </Typography>
    </Stack>
  );
};
export default AppLogo;
