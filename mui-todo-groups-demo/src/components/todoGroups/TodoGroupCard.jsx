import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";

const thumbnail =
  "https://thumbs.dreamstime.com/b/no-thumbnail-image-placeholder-forums-blogs-websites-148010362.jpg";
const TodoGroupCard = (props) => {
  const { id, title, description, imgSrc } = props;
  const handleOnError = (e) => {
    e.target.src = thumbnail;
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{
          height: 140,
          display: "flex",
          justifyContent: "center",
        }}
        title="green iguana"
      >
        <img src={imgSrc} alt={title} onError={handleOnError} width="100%" />
      </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ color: "white" }}>
        <Button
          size="small"
          variant="contained"
          component={Link}
          to={`/groups/${id}`}
          sx={{ marginRight: "10px" }}
          startIcon={<RemoveRedEyeIcon />}
        >
          View
        </Button>
        <Button
          size="small"
          variant="contained"
          color="success"
          startIcon={<EditIcon />}
        >
          Edit
        </Button>
      </CardActions>
    </Card>
  );
};

export default TodoGroupCard;
