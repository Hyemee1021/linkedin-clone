import React from "react";
import "./Login.css";

import linkedinLogo from "./assets/linkedinLogo.png";

export const Login = () => {
  return (
    <div className="login">
      <h1>You are not logged in.</h1>
      <img src={linkedinLogo} />
    </div>
  );
};
