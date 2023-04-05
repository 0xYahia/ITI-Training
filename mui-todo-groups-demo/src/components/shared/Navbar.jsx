import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AppLogo from "./AppLogo";
import BurgerIconButton from "./BurgerIconButton";
import { Link } from "react-router-dom";
import { Drawer } from "@mui/material";
import { useState } from "react";

const navLinks = [
  { label: "Groups", to: "/groups" },
  { label: "Cerate Group", to: "/groups/create" },
];

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AppLogo sx={{ display: { xs: "none", md: "flex" } }} />
            <BurgerIconButton onClick={() => setDrawerOpen(true)} />
            <AppLogo sx={{ display: { xs: "flex", md: "none" } }} />
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {navLinks.map(({ label, to }) => (
                <Button
                  key={label}
                  to={to}
                  component={Link}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {label}
                </Button>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0 }}>Dark mode toggler</Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box minWidth={250}></Box>
      </Drawer>
    </>
  );
}
export default Navbar;
