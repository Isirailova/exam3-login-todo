import React, { useState, useContext } from "react";
import { UserContext } from "../../App"; // Correcting the import path
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import "./loginPage.style.css";

const creds = {
  username: "aida",
  password: "123",
};

const LoginPage = () => {
  const [user, setUser] = useState({ username: "", password: "" });
  const { setIsAuthenticated } = useContext(UserContext);

  const onSubmit = (e) => {
    e.preventDefault();
    if (user.username === creds.username && user.password === creds.password) {
      setIsAuthenticated(true);
    } else {
      alert("Try again!");
    }
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <Typography
          variant="h5"
          style={{
            display: "flex",
            alignItems: "center",
            fontFamily: "unset",
            color: "CaptionText",
          }}
        >
          Login Page{" "}
          <Avatar
            src="/broken-image.jpg"
            sx={{ width: 32, height: 32, marginLeft: 1 }}
          />
        </Typography>
        <TextField
          label="Username"
          variant="standard"
          value={user.username}
          name="username"
          onChange={onChangeHandler}
        />
        <TextField
          label="Password"
          variant="standard"
          type="password"
          value={user.password}
          name="password"
          onChange={onChangeHandler}
        />
        <Button variant="outlined" type="submit">
          Login
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;
