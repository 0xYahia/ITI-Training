import { Box, Button, ClickAwayListener, Paper } from "@mui/material";
import { useState } from "react";

const MuiClickAwayListnner = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <ClickAwayListener onClickAway={() => setOpen(false)}>
        <Box maxWidth={200}>
          <Button variant="contained" onClick={() => setOpen(true)}>
            Open Menu
          </Button>
          {open && (
            <Paper elevation={1} sx={{ p: "3" }}>
              Menu of this button
            </Paper>
          )}
        </Box>
      </ClickAwayListener>
    </>
  );
};

export default MuiClickAwayListnner;
