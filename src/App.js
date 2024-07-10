import React from "react";

import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="app">
      {/* header */}
      <Header />
      <div className="app__body">
        {/* App body */}
        {/* side bar */}
        <Sidebar />
        {/* feed */}
        {/* widget */}
      </div>
    </div>
  );
}

export default App;
