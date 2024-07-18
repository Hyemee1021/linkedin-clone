import React, { useEffect } from "react";

import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, logout, login } from "./features/userSlice";
import { onAuthStateChanged, auth } from "./firebase";
import { Login } from "./Login";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });

    return () => unsubscribe(); // Cleanup listener on component unmount
  }, [dispatch]); // Add dependencies

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
