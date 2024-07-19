import React, { useState } from "react";
import "./Login.css";

import { login } from "./features/userSlice";
import linkedinLogo from "./assets/linkedinLogo.png";
import { useDispatch } from "react-redux";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();

  const register = () => {
    const auth = getAuth();
    if (!name) {
      return alert("Please enter a full name");
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        const user = userAuth.user;

        dispatch(
          login({
            email: user.email,
            uid: user.uid,
            displayName: name,
            photoUrl: profilePic,
          })
        );

        alert("Account is created successfully.");
        setEmail("");
        setName("");
        setPassword("");
      })

      .catch((error) => alert(error.message));
  };

  const loginToApp = (e) => {
    const auth = getAuth();
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        const user = userAuth.user;
        dispatch(
          login({
            email: user.email,
            uid: user.uid,
            displayName: user.displayName,
            profileUrl: user.photoURL,
          })
        );
        alert(" You are suceessfully logged in.");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="login">
      <h1>You are not logged in.</h1>
      <img src={linkedinLogo} />
      <form action="">
        <input
          placeholder="Full name (required if regitering)"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          placeholder="Profile pic URL (optional)"
          type="text"
        />
        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a member?{" "}
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
};
