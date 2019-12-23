import React from "react";
import { InputBase, IconButton, makeStyles } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const Search = props => {
  const useStyles = makeStyles(theme => ({
    searchInput: {
      width: "100%",
      background: "white",
      padding: "5px 10px",
      borderRadius: "25px"
    },
    iconButton: {
      position: "absolute",
      transform: "translate(-100%, -4%)"
    }
  }));
  const classes = useStyles();
  return (
    <>
      <InputBase className={classes.searchInput} placeholder="Search for Courses" />
      <IconButton className={classes.iconButton}>
        <SearchIcon />
      </IconButton>
    </>
  );
};

export default Search;
