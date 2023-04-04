import { Box, Container, Divider, Grid, Paper, Stack } from "@mui/material";

const boxStyle = {
  borderWidth: "1px",
  borderStyle: "solid",
  padding: "5px",
  minWidth: "100px",
};

const MuiLayout = () => {
  return (
    <Box component="main">
      <h1>Layout</h1>
      <Stack
        direction="row"
        gap={1}
        spacing={3}
        alignItems="center"
        divider={
          <Divider
            orientation="vertical"
            flexItem
            sx={{ borderWidth: "2px" }}
          />
        }
      >
        <Box sx={{ borderColor: "red", height: "50px", ...boxStyle }}>1</Box>
        <Box sx={{ borderColor: "green", ...boxStyle }}>2</Box>
        <Box sx={{ borderColor: "blue", ...boxStyle }}>3</Box>
      </Stack>
      <Divider sx={{ borderWidth: "2px", mt: "10px" }} />
      <Container maxWidth="sm">Container</Container>
      <hr />
      <Grid container rowSpacing={3} columnSpacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            elevation={2}
            sx={{ p: "3px", textAlign: "center", fontSize: "20px" }}
          >
            1
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            elevation={2}
            sx={{ p: "3px", textAlign: "center", fontSize: "20px" }}
          >
            2
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Paper
            elevation={2}
            sx={{ p: "3px", textAlign: "center", fontSize: "20px" }}
          >
            3
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MuiLayout;
