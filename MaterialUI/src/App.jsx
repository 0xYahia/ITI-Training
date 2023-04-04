import MuiButtons from "./components/MuiButtons";
import MuiTypography from "./components/MuiTypography";
import MuiTextField from "./components/MuiTextField";
import MuiCheckbox from "./components/MuiCheckbox";
import MuiLayout from "./components/MuiLayout";
import MuiClickAwayListnner from "./components/mui-util/MuiClickAwayListnner";
import { Button, CssBaseline, GlobalStyles, Typography } from "@mui/material";
import MuiUseMediaQuery from "./components/mui-util/MuiUseMediaQuery";
import MyButton from "./customization/MyButton";
import StyleDiv from "./customization/StyleDiv";
import { ThemeProvider } from "@emotion/react";
import theme from "./utils/theme";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles
          styles={{
            ".MuiButtonBase-root": {
              fontSize: "30",
            },
          }}
        />
        {/* <MuiTypography /> */}
        {/* <MuiButtons /> */}
        {/* <MuiTextField /> */}
        {/* <MuiCheckbox /> */}
        {/* <MuiLayout /> */}
        {/* <MuiClickAwayListnner /> */}
        {/* <MuiUseMediaQuery /> */}
        <MyButton>Click it</MyButton>
        <StyleDiv>This is Styled div</StyleDiv>
        <Button disableRipple color="secondary" variant="contained">
          Theme test
        </Button>
        <Typography variant="h1" sx={{ fontWeight: { md: 400 } }}>
          Heading 1
        </Typography>
        <Typography variant="h2">Heading 2</Typography>
        <Typography variant="h3">Heading 3</Typography>
        <Typography variant="h4">Heading 4</Typography>
      </ThemeProvider>
    </>
  );
};

export default App;
