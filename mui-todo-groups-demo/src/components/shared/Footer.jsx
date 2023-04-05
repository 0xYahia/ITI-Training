import { Box } from "@mui/material";
import Container from "@mui/material/Container";
const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: (theme) => theme.palette.primary.main,
        color: "white",
        fontSize: 40,
      }}
    >
      <Container>Footer</Container>
    </Box>
  );
};

export default Footer;
