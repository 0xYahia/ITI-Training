import { Button } from "@mui/material";

const MyButton = (props) => {
  return (
    <Button
      {...props}
      disabled
      sx={{
        transition: "0.3s ease-out font-size",
        fontSize: {
          xs: 12,
          md: 14,
        },
        textTransform: "none",
        // color: (theme) => theme.palette.primary.light,
        "&.Mui-disabled": {
          color: "rgba(0,0,0,1)",
        },
      }}
    ></Button>
  );
};

export default MyButton;
