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
      fontWeight: "700",
      fontSize: "14px"
    },
    price: {
      fontWeight: "700",
      float: "right"
    }
  }));

  const classes = useStyles();

  const { image, title, price, duration } = props.course;

  return (
    <>
      <Grid item xs={3}>
        <Card>
          <CardActionArea>
            <CardMedia image={`/img/${image}`} title={title} style={{ height: "190px" }} />
            <CardContent>
              <Typography
                gutterBottom
                variant="body1"
                component="h3"
                color="primary"
                className={classes.title}
              >
                {title}
              </Typography>
              <Typography gutterBottom variant="body2" color="textSecondary" component="p">
                Total durasi video kursus {duration}
              </Typography>
              <Typography gutterBottom varian="h4" color="primary" className={classes.price}>
                Rp. {price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&.")}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </>
  );
};

export default CourseItem;
