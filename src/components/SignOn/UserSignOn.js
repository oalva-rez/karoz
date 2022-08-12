import React, { useState } from "react";
import logo from "../../assets/logo-dark.svg";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function UserSignOn() {
  const [signIn, setSignIn] = useState(true);
  return (
    <div className="sign-on--wrapper">
      <div className="sign-on--heading">
        <h1>
          <img src={logo} alt="logo" className="sign-on--logo" />
          Karoz
        </h1>
        <h2>
          Optimize your work delivery to multiple teams and handle even the most
          complex projects in a single environnement.
        </h2>
        <p>
          Achieve continuous improvement and sustainable change within an
          organization implementing changes based on scientifically proven
          methods, feedback, and metrics. Karoz is here to help.
        </p>
      </div>
      <div className="sign-on--user-info">
        {signIn ? <SignUp /> : <SignIn />}
      </div>
    </div>
  );
}

export default UserSignOn;
