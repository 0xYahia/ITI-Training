import { Container, CssBaseline, Stack } from "@mui/material";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Layout = ({ children }) => {
  return (
    <Stack sx={{ minHeight: "100vh" }}>
      <CssBaseline />
      <Navbar />
      <Container sx={{ flex: 1 }}>{children}</Container>
      <Footer />
    </Stack>
  );
};

export default Layout;
