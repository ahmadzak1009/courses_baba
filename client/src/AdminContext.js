import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AdminContext = createContext();

export const AdminProvider = props => {
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get("/auth/cek-token", { headers: { Authorization: `Bearer ${token}` } })
        .then(res => res.data)
        .then(data => setAdmin(true))
        .catch(err => setAdmin(false));
    }
  }, [setAdmin]);

  // Admin Login
  const [loginDialog, setLoginDialog] = useState(false);
  const handleOpenLoginDialog = () => setLoginDialog(true);
  const handleCloseLoginDialog = () => setLoginDialog(false);

  const tryLogin = async (username, password) => {
    try {
      const res = await axios.post("/auth/login", { username, password });
      const data = await res.data;
      if (!data.token) return data;

      localStorage.setItem("token", data.token);
      setAdmin(true);
    } catch (err) {
      console.log(err);
    }
  };

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    setAdmin(false);
  };

  return (
    <AdminContext.Provider
      value={{
        admin,
        loginDialog,
        handleOpenLoginDialog,
        handleCloseLoginDialog,
        tryLogin,
        handleLogout
      }}
    >
      {props.children}
    </AdminContext.Provider>
  );
};
