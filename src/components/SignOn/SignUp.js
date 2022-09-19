import React from "react";
import googleIcon from "../../assets/icon-google.png";
import facebookIcon from "../../assets/icon-facebook.png";
function SignUp({ handleSignIn }) {
  return (
    <div className="user-wrapper">
      <h2>Create Account</h2>
      <div className="user-buttons">
        <button onClick={handleSignIn}>
          <img src={googleIcon} alt="google" />
          Continue with Google
        </button>
        <button>
          <img src={facebookIcon} alt="facebook" />
          Continue with Facebook
        </button>
      </div>
      <div className="or">- OR -</div>
      <form className="user-form">
        <label htmlFor="name">Full Name</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />
        <button
          onClick={(e) => {
            e.preventDefault();
          }}
          className="sign-on-button"
        >
          Create Account
        </button>
      </form>
      <p className="user-login-account">
        Already have an account?<span> Log in</span>
      </p>
    </div>
  );
}

export default SignUp;
