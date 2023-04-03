import Button from "@mui/material/Button";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import IconButton from "@mui/material/IconButton";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import LoadingButton from "@mui/lab/LoadingButton";
const MuiButtons = () => {
  return (
    <>
      <Button variant="contained">contained</Button>
      <Button variant="outlined">outlined</Button>
      <Button variant="text">text</Button>
      <hr />
      <Button variant="contained" color="secondary">
        secondary
      </Button>
      <Button variant="outlined" color="warning">
        warning
      </Button>
      <Button variant="text" color="error">
        error
      </Button>
      <hr />
      <Button variant="contained" color="secondary" size="small">
        secondary
      </Button>
      <Button variant="contained" color="secondary" size="medium">
        warning
      </Button>
      <Button variant="contained" color="secondary" size="large">
        error
      </Button>
      <hr />
      <Button variant="contained" color="secondary" size="large" disableRipple>
        disableRipple
      </Button>
      <hr />
      <Button
        variant="contained"
        color="secondary"
        size="large"
        disableElevation
      >
        disableElevation
      </Button>
      <hr />
      <Button
        variant="contained"
        component="a"
        href="https://www.youtube.com/"
        target="_blank"
        startIcon={<ArrowDownwardIcon />}
      >
        Link Button
      </Button>
      <hr />
      <Button
        variant="contained"
        component="a"
        startIcon={<ArrowUpwardIcon />}
        onClick={(e) => console.log(e)}
      >
        Link Button
      </Button>
      <hr />
      <IconButton color="secondary">
        <ArrowDownwardIcon />
      </IconButton>
      <hr />
      <LoadingButton
        variant="contained"
        color="secondary"
        loading
        loadingPosition="start"
        startIcon={<ArrowDownwardIcon />}
      >
        Save changing
      </LoadingButton>
    </>
  );
};

export default MuiButtons;
