import React, { useEffect } from "react";

import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, logout, login } from "./features/userSlice";
import { onAuthStateChanged, getAuth } from "firebase";
import { Login } from "./Login";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const auth = getAuth();
    auth.onAuthStateChanged((user) => {
      if (user) {
        const uid = user.uid;
        dispatch(
          login({
            email: user.email,
            uid: user.uid,
            displayName: user.displayName,
            photoUrl: user.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  });
  return (
    //from here down html
    //{it becomes Javascript}
    <div className="app">
      {/* header */}
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          {/* App body */}
          {/* side bar */}
          <Sidebar />

          {/* feed */}
          <Feed />
          {/* widget */}
        </div>
      )}
    </div>
  );
}

export default App;
