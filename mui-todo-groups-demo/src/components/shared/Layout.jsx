import {
  Container,
  CssBaseline,
  GlobalStyles,
  Stack,
  ThemeProvider,
} from "@mui/material";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";
import theme from "../../utils/theme";

const routesWithNoFooter = ["/groups"];
const Layout = ({ children }) => {
  const location = useLocation();
  const isFooterHidden = routesWithNoFooter.includes(location.pathname);
  return (
    <ThemeProvider theme={theme}>
      <Stack sx={{ minHeight: "100vh" }}>
        <CssBaseline />
        <GlobalStyles
          styles={{
            a: {
              color: "inherit",
              textDecoration: "none",
              ":hover, :active, :visited": {
                color: "inherit",
              },
            },
            ul: {
              listStyle: "none",
              marginBlock: 0,
              paddingInline: 0,
            },
          }}
        />
        <Navbar />
        <Container sx={{ flex: 1 }}>{children}</Container>
        {/* {!isFooterHidden && <Footer />} */}
        <Footer />
      </Stack>
    </ThemeProvider>
  );
};

export default Layout;
