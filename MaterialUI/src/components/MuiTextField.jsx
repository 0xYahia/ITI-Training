import { useState } from "react";

import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import FormHelperText from "@mui/material/FormHelperText";

import PersonIcon from "@mui/icons-material/Person";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import IconButton from "@mui/material/IconButton";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Button } from "@mui/material";

const MuiTextField = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showText, setShowText] = useState(false);
  const [username, setUsername] = useState("Default Value");

  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };
  const toggleShowText = () => {
    setShowText((prevState) => !prevState);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log({ username });
  };
  return (
    <>
      <div>
        <TextField
          label="Uername"
          helperText="This is helper text"
          variant="filled"
          color="success"
        />
        <TextField
          label="Uername"
          helperText="This is helper text"
          variant="outlined"
          color="secondary"
        />
        <TextField
          label="Uername"
          helperText="This is helper text"
          variant="standard"
          color="warning"
        />
        <hr />
        <TextField
          label="Uername"
          helperText="This is helper text"
          variant="outlined"
          disabled
        />
        <form>
          <TextField
            label="Uername"
            helperText="This is helper text"
            variant="outlined"
            required
          />
          <button type="submit">submit</button>
        </form>
        <hr />
        <TextField
          label="Uername"
          helperText="This is helper text"
          variant="outlined"
          type="number"
        />
        <TextField
          label="Password"
          helperText="This is helper text"
          variant="outlined"
          type="password"
        />
        <TextField
          label="Uername"
          helperText="This is helper text"
          variant="outlined"
          defaultValue="this is default value"
        />
        <TextField
          variant="outlined"
          label="Uername"
          helperText="This is helper text"
          color="secondary"
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            "data-testid": "component-username-input-testId",
          }}
          inputProps={{
            "data-testid": "username-input-testId",
          }}
        />
        <hr />
        <TextField
          variant="outlined"
          label="Uername"
          helperText="This is helper text"
          color="secondary"
          multiline
          rows={8}
          error
        />
        <hr />
        <TextField
          variant="outlined"
          label="Uername"
          color="secondary"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          variant="outlined"
          label="Password"
          color="secondary"
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={toggleShowPassword}>
                  {showPassword ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </div>
      <hr />
      <div>
        <FormControl error>
          <InputLabel htmlFor="username">
            {showText ? "show" : "hide"}
          </InputLabel>
          <Input
            type={showText ? "text" : "password"}
            id="username"
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={toggleShowText}>
                  {showText ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            }
          />
          <FormHelperText>This is helper text</FormHelperText>
        </FormControl>
      </div>
      <hr />
      <div>
        <form onSubmit={handleOnSubmit}>
          <TextField
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></TextField>
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </form>
      </div>
    </>
  );
};

export default MuiTextField;
