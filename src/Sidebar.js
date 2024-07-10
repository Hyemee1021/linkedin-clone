import { Avatar } from "@mui/material";
import React from "react";
import background from "./assets/background.jpg";
import "./Sidebar.css";
const Sidebar = () => {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src={background} alt="" />
        <Avatar className="sidebar__avatar" />
        <h2>Hye Mee Park</h2>
        <h4>hyemee1021@gmail.com</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,456</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on posts</p>
          <p className="sidebar__statNumber">2,345</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("JavaScript")}
        {recentItem("ReactJs")}
        {recentItem("frontend")}
        {recentItem("Node.js")}
      </div>
    </div>
  );
};

export default Sidebar;
