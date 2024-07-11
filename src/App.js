import React from "react";

import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";

function App() {
  return (
    //from here down html
    //{it becomes Javascript}
    <div className="app">
      {/* header */}
      <Header />
      <div className="app__body">
        {/* App body */}
        {/* side bar */}
        <Sidebar />

        {/* feed */}
        <Feed />
        {/* widget */}
      </div>
    </div>
  );
}

export default App;
