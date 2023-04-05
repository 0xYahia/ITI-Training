import Container from "@mui/material/Container";
const Footer = () => {
  return (
    <Container
      sx={{
        backgroundColor: (theme) => theme.palette.primary.main,
        color: "white",
        fontSize: 40,
      }}
    >
      Footer
    </Container>
  );
};

export default Footer;
