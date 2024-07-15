import React from "react";

import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import { Login } from "./Login";
function App() {
  const user = useSelector(selectUser);
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
