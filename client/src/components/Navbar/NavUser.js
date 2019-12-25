import React, { useContext } from "react";
import { Button, IconButton, Link, makeStyles, Box } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { AdminContext } from "../../AdminContext";
import LoginDialog from "../dialogs/LoginDialog";
import AddDialog from "../dialogs/AddDialog";
import { CourseContext } from "../../CourseContext";

const NavUser = props => {
  const { admin, handleOpenLoginDialog, handleLogout } = useContext(AdminContext);
  const { openAddDialog } = useContext(CourseContext);

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
        {admin ? (
          <>
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
            <Button color="inherit" variant="outlined" onClick={openAddDialog}>
              Add Course
            </Button>
            <AddDialog />
          </>
        ) : (
          <>
            <Button color="inherit">Sign Up</Button>
            <Button color="inherit" variant="outlined" onClick={handleOpenLoginDialog}>
              Login
            </Button>
            <LoginDialog />
          </>
        )}
      </Box>
    </>
  );
};

export default NavUser;
