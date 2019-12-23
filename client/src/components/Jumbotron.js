import React from "react";
import { Box, Typography } from "@material-ui/core";

const Jumbotron = props => {
  return (
    <>
      <Box
        height="80vh"
        width="100%"
        style={{
          background: `url(${require("../img/bg-jumbotron.webp")}) no-repeat`,
          backgroundSize: "cover",
          marginTop: "64px"
        }}
      >
        <Box style={{ background: "black", opacity: 0.2, height: '100%', width: '100%' }} />
          <Typography variant="h3" style={{ position: "absolute", top: "35%", textAlign: "center", right: 0, left: 0}}>
            Kursus Online Digital marketing<br />
            Programing dan Desain<br />
            Telah di ikuti 133 ribu alumni
          </Typography>
      </Box>
    </>
  );
};

export default Jumbotron;
