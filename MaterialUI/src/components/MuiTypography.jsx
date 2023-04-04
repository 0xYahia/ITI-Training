import { Button, ButtonGroup } from "@mui/material";
import Typography from "@mui/material/Typography";
const MuiTypography = () => {
  var yahia = 'ahmed'
yahia
  return (
    <>
      <Typography variant="h1" className="my-color">
        Headline 1
      </Typography>
      <Typography variant="h2">Headline 2</Typography>
      <Typography variant="h3">Headline 3</Typography>
      <Typography variant="h4">Headline 4</Typography>
      <Typography variant="h5">Headline 5</Typography>
      <Typography variant="h6">Headline 6</Typography>
      <Typography variant="subtitle1">subtitle 1</Typography>
      <Typography variant="subtitle2">subtitle 2</Typography>
      <Typography variant="body1" component="div" gutterBottom>
        body 1
      </Typography>
      <Typography variant="body2" component="address">
        body 2
      </Typography>
      <Typography variant="button">button</Typography>
      <Typography variant="caption" component="center">
        caption
      </Typography>
      <Typography variant="overline">overline</Typography>
      <MyTypography component="button">My Typography</MyTypography>
      <hr />
      <ButtonGroup color="error" variant="contained" orientation="vertical">
        <Button>left</Button>
        <Button>center</Button>
        <Button>Right</Button>
      </ButtonGroup>
    </>
  );
};

export default MuiTypography;

const MyTypography = (props) => {
  const { component, children } = props;
  const Component = component;
  console.log({ component });
  return <Component>{children}</Component>;
};
