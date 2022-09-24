import React, { useState, useEffect } from "react";
import logo from "../../assets/logo-dark.svg";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { initializeApp } from "firebase/app";
import { getFirebaseConfig } from "../../firebase-config";
import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { getFirestore, setDoc, doc } from "firebase/firestore";
import { useUserInfoContext } from "../../context/UserInfoContext";

function UserSignOn() {
  const [userInfo, setUserInfo] = useUserInfoContext();

  // on click on 'Login' set state to true
  const [signIn, setSignIn] = useState(true);

  async function handleSignIn() {
    let provider = new GoogleAuthProvider();
    await signInWithPopup(getAuth(), provider);
    setUserInfo((prev) => {
      return {
        ...prev,
        uId: getAuth().currentUser.uid,
        displayName: getAuth().currentUser.displayName,
        email: getAuth().currentUser.email,
        photoURL: getAuth().currentUser.photoURL,
      };
    });
  }

  // init auth observer
  useEffect(() => {
    const firebaseAppConfig = getFirebaseConfig();
    initializeApp(firebaseAppConfig);
  }, []);

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
        {signIn ? <SignUp handleSignIn={handleSignIn} /> : <SignIn />}
      </div>
    </div>
  );
}

export default UserSignOn;
