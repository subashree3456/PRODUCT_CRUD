import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Rating } from "react-simple-star-rating";
import { useNavigate } from "react-router-dom";

export default function CardItems({ data, id, deleteProduct }) {
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={() => navigate(`View/${data.id}`)}>
        <CardMedia
          component="img"
          height="340"
          image={data.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.discription}
          </Typography>
          <Rating
            initialValue={data.rating}
            disableFillHover={true}
            allowHover={false}
            allowFraction={true}
            size={22}
          />
          <Typography gutterBottom variant="h5" component="div">
            💲{data.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => navigate(`Edit/${data.id}`)}
        >
          Edit
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => deleteProduct(data.id)}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
