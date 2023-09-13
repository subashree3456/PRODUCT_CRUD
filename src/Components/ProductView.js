import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import { Rating } from "react-simple-star-rating";

function ProductView() {
  const param = useParams();
  const [user, setUsers] = useState({});
  useEffect(() => {
    loadUser();
  }, []);
  let loadUser = async () => {
    try {
      let users = await axios.get(
        `https://631d700ecc652771a4859a9c.mockapi.io/Products/${param.id}`
      );
      setUsers(users.data);
    } catch (error) {
      console.log("Somthing Wend Worring");
    }
  };
  return (
    <div className="col-lg-8 col-md-9 col-sm-12 m-auto">
      <Card sx={{ maxWidth: 435 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="350"
            image={user.image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {user.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {user.discription}
            </Typography>
            <Rating
              initialValue={user.rating}
              disableFillHover={true}
              allowHover={false}
              allowFraction={true}
              size={22}
            />
            <Typography gutterBottom variant="h5" component="div">
              💲{user.price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to="/Portal" className="btn btn-primary">
            Back
          </Link>
        </CardActions>
      </Card>
    </div>
  );
}

export default ProductView;
