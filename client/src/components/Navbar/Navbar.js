import React from "react";
import { AppBar, Toolbar, Grid, Link } from "@material-ui/core";
import Category from "./Category";
import Search from "./Search";
import NavUser from "./NavUser";

const Navbar = props => {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Link href="#">
            <img src={require("../../img/logo.png")} alt="logo Babastudio" />
          </Link>
          <Grid container direction="row" justify="space-between" alignItems="center">
            <Grid item xs={3}>
              <Category />
            </Grid>
            <Grid item xs={4}>
              <Search />
            </Grid>
            <Grid item xs={5}>
              <NavUser />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
