import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./Loginscreen.css";
import { useNavigate } from "react-router-dom";
function Loginscreen() {
  const navigate = useNavigate();
  return (
    <div className="loginscreen-body">
      <div className="loginscreen-innerbody">
        <h1>
          Signin to your <br />
          PopX account
        </h1>
        <pre>
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit.
        </pre>
        <Box
          className="box"
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            label="Email Address"
            color="grey"
            InputLabelProps={{ style: { color: "blue", fontWeight: "bold" } }}
            placeholder="Enter email address"
            focused
            className="inputbox"
          />
          <TextField
            label="Password"
            color="grey"
            InputLabelProps={{ style: { color: "blue", fontWeight: "bold" } }}
            placeholder="Enter password"
            focused
            className="inputbox"
          />
        </Box>
        <button
          className="login-button"
          onClick={() => {
            navigate("/profilescreen");
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Loginscreen;
