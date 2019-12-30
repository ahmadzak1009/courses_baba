import React, { useContext, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button
} from "@material-ui/core";
import { AdminContext } from "../../AdminContext";
import { withSnackbar } from "notistack";

const LoginDialog = props => {
  const { loginDialog, handleCloseLoginDialog, tryLogin } = useContext(AdminContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [userError, setUserError] = useState(false);
  const [passError, setPassError] = useState(false);

  const submitLogin = async () => {
    const response = await tryLogin(username, password);
    if (response) {
      if (response.includes("username")) {
        setPassError(false);
        return setUserError(response);
      } else {
        setUserError(false);
        return setPassError(response);
      }
    }

    setUsername("");
    setPassword("");
    setUserError(false);
    setPassError(false);
    handleCloseLoginDialog();
    props.enqueueSnackbar("You're Logged In", {
      variant: "success"
    });
  };

  return (
    <>
      <Dialog open={loginDialog} onClose={handleCloseLoginDialog} aria-labelledby="login-dialog">
        <DialogTitle id="login-dialog">
          <center>Login</center>
        </DialogTitle>
        <DialogContent>
          <TextField
            error={Boolean(userError)}
            helperText={userError ? userError : " "}
            variant="outlined"
            label="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            margin="normal"
          />
          <br />
          <TextField
            error={Boolean(passError)}
            helperText={passError ? passError : " "}
            variant="outlined"
            label="password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="primary"
            style={{ margin: "auto" }}
            onClick={submitLogin}
          >
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default withSnackbar(LoginDialog);
