import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";

const BurgerIconButton = (props) => {
  return (
    <Box sx={{ display: { xs: "flex", md: "none" } }}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        color="inherit"
        {...props}
      >
        <MenuIcon />
      </IconButton>
    </Box>
  );
};

export default BurgerIconButton;
