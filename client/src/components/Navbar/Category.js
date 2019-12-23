import React, { useState } from "react";
import { Typography, Button, Menu, MenuItem } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const Category = props => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const categories = [
    "Design",
    "Digital Marketing",
    "Programming Front End",
    "Programming Back End",
    "Mobile",
    "Video Editing",
    "Database"
  ];

  const handleClick = e => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button color="inherit" onClick={handleClick}>
        <MoreVertIcon />
        <Typography variant="overline" style={{ fontWeight: 700, fontSize: "12px" }}>
          Category
        </Typography>
      </Button>
      <Menu anchorEl={anchorEl} keepMounted open={open} onClose={handleClose}>
        {categories.map(cat => (
          <MenuItem key={cat} onClick={handleClose}>
            {cat}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default Category;
