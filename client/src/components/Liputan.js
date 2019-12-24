import React from "react";
import { Box, Typography, makeStyles, Grid, Container } from "@material-ui/core";

const Liputan = props => {
  const useStyles = makeStyles(theme => ({
    wrapper: {
      padding: "20px",
      textAlign: "center",
      background: "#CCECF9"
    },
    mediaWrapper: {
      display: "flex",
      width: "900px",
      margin: "auto",
      justifyContent: "space-between",
      alignItems: "center"
    },
    liputanWrapper: {
      background: "#F5F5F5",
      padding: "30px"
    },
    liputanDesc: {
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column"
    }
  }));

  const classes = useStyles();
  return (
    <>
      <Box className={classes.wrapper}>
        <Typography component="p">Pernah Di Liput Oleh :</Typography>
        <Box className={classes.mediaWrapper}>
          <img src={require("../img/metro.png")} alt="media" />
          <img src={require("../img/kompas.png")} alt="media" />
          <img src={require("../img/jktpost.png")} alt="media" />
          <img src={require("../img/detik.png")} alt="media" />
          <img src={require("../img/yahoo.png")} alt="media" />
        </Box>
      </Box>
      <Box className={classes.liputanWrapper}>
        <Container style={{ padding: 0 }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/k8XN5iCJFhI"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ marginLeft: "50px" }}
              ></iframe>
            </Grid>
            <Grid item xs={6}>
              <Box className={classes.liputanDesc}>
                <Typography variant="h4">
                  Liputan Babastudio E-Learning di kompas TV bersama alumni
                </Typography>
                <Typography variant="h6" color="textSecondary">
                  Kompas TV melipus Babastudio E-Learning karena, memberikan kursus pada lebih 500
                  orang setiap harinya.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Liputan;
