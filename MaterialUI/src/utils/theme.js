import { Button, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
    secondary: {
      main: "#656565",
    },
  },
  typography: {
    htmlFontSize: 10,
    h1: {
      fontSize: 50,
    },
    allVariants: {
      color: "#f06565",
      fontWeight: 600,
    },
  },
  breakpoints: {
    values: {
      md: 800,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {},
        containedPrimary: {},
        root: ({ ownerState }) =>
          ownerState.disableRipple && {
            backgroundColor: "wheat",
          },
      },
    },
  },
});

export default theme;
