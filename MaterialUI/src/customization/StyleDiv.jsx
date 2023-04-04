import { styled } from "@mui/material/styles";
// import styled from "@emotion/styled";

const StyleDiv = styled("div")(({ theme }) => ({
  border: `1px solid ${
    theme.palette.mode === "light" ? theme.palette.error.main : "transparnt"
  }`,
  color: theme.palette.mode === "light" ? theme.palette.error.main : "white",
  backgroundColor:
    theme.palette.mode === "light" ? "transparent" : theme.palette.error.main,
  [theme.breakpoints.up("md")]: {
    padding: "5px 10px",
  },
}));

export default StyleDiv;
