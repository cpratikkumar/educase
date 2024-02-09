import React from "react";
import "./Landingpage.css";
import { useNavigate } from "react-router-dom";
function Landingpage() {
  const navigate = useNavigate();
  return (
    <div className="landingpage-body">
      <div className="landingpage-innerbody">
        <h1>Welcome to PopX</h1>
        <pre>
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit.
        </pre>
        <button
          className="createaccount"
          onClick={() => {
            navigate("/signupscreen");
          }}
        >
          Create Account
        </button>
        <button
          className="loginbutton"
          onClick={() => {
            navigate("/loginscreen");
          }}
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}

export default Landingpage;
