import React from "react";
import { Box, Typography } from "@material-ui/core";

const Footer = props => {
  return (
    <>
      <Box
        paddingY="50px"
        marginTop="50px"
        textAlign="center"
        style={{ background: "#434A53", color: "white" }}
      >
        <Typography>Copyright @2018 techfor.id, All right reserved.</Typography>
      </Box>
    </>
  );
};

export default Footer;
