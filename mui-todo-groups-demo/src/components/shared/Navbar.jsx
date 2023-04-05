import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AppLogo from "./AppLogo";
import BurgerIconButton from "./BurgerIconButton";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Groups", to: "/groups" },
  { label: "Cerate Group", to: "/groups/create" },
];

function Navbar() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AppLogo sx={{ display: { xs: "none", md: "flex" } }} />
          <BurgerIconButton />
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
  );
}
export default Navbar;
