import React from "react";
import {
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  makeStyles
} from "@material-ui/core";

const CourseItem = props => {
  const useStyles = makeStyles(theme => ({
    title: {
      fontWeight: "700"
    },
    price: {
      fontWeight: "700",
      float: "right"
    }
  }));

  const classes = useStyles();

  return (
    <>
      <Grid item xs={3}>
        <Card>
          <CardActionArea>
            <CardMedia
              image="/img/course-laravel.webp"
              title="Course Laravel"
              style={{ height: "190px" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" color="primary" className={classes.title}>
                Lizard
              </Typography>
              <Typography gutterBottom variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles.
              </Typography>
              <Typography gutterBottom varian="h4" color="primary" className={classes.price}>
                Rp. 500.000
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </>
  );
};

export default CourseItem;
