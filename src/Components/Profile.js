import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  return (
    <div className="col-lg-8 col-md-9 col-sm-12 m-auto">
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="340"
            image="https://upload.wikimedia.org/wikipedia/en/f/f2/JiraiyaNarutomanga.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Grand Master Jiraiya
            </Typography>
            <Typography variant="body2" color="text.secondary">
              I am The Owner Of This Page.....
              <br />
              Iam From Leaf Village...
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => navigate("/Portal")}
          >
            Back
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
