import { useState } from "react";

import Checkbox from "@mui/material/Checkbox";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";

import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const MuiCheckbox = () => {
  const [isActive, setIsActive] = useState(false);
  const top100Films = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
    { label: "The Dark Knight", year: 2008 },
    { label: "12 Angry Men", year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: "Pulp Fiction", year: 1994 },
    {
      label: "The Lord of the Rings: The Return of the King",
      year: 2003,
    },
    { label: "The Good, the Bad and the Ugly", year: 1966 },
    { label: "Fight Club", year: 1999 },
  ];
  return (
    <>
      <h1>Checkbox</h1>
      <Checkbox
        checked={isActive}
        indeterminate
        onChange={() => setIsActive((prev) => !prev)}
      />
      <ul>
        <li>
          <Checkbox />
        </li>
        <li>
          <Checkbox />
        </li>
        <li>
          <Checkbox />
        </li>
      </ul>
      <hr />
      <FormControlLabel
        label="Remember me"
        labelPlacement="start"
        control={
          <Checkbox
            color="success"
            checked={isActive}
            onChange={() => setIsActive((prev) => !prev)}
          />
        }
      />
      <FormControlLabel
        label="Remember me"
        labelPlacement="start"
        control={
          <Switch
            color="success"
            size="small"
            checked={isActive}
            onChange={() => setIsActive((prev) => !prev)}
          />
        }
      />
      <FormControlLabel
        label="Remember me"
        labelPlacement="start"
        control={
          <Checkbox
            color="success"
            size="small"
            checked={isActive}
            icon={<FavoriteBorderIcon />} // unchecked
            checkedIcon={<FavoriteIcon />} // checked
            onChange={() => setIsActive((prev) => !prev)}
          />
        }
      />
      <hr />
      <Autocomplete
        options={top100Films}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Movie" />}
      />
    </>
  );
};

export default MuiCheckbox;
