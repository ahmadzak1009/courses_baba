import React from "react";
import { Button, IconButton, Link, makeStyles, Box } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const NavUser = props => {
  const useStyles = makeStyles(theme => ({
    techFor: {
      "&:hover": {
        color: "black",
        textDecoration: "none"
      }
    }
  }));
  const classes = useStyles();

  return (
    <>
      <Box display="flex" justifyContent="flex-end" alignItems="center">
        <Link href="#" color="inherit" className={classes.techFor}>
          TechFor Community
        </Link>
        <IconButton color="inherit">
          <ShoppingCartIcon />
        </IconButton>
        <Button color="inherit">Login</Button>
        <Button color="inherit" variant="outlined">
          Sign Up
        </Button>
      </Box>
    </>
  );
};

export default NavUser;
