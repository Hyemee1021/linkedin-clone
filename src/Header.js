import React from "react";
import "./Header.css";
import linkedin from "./assets/linkedin.png";
import HeaderOption from "./HeaderOption";
// icon
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import me_photo from "./assets/me_photo.png";
const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img src={linkedin} />

        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption title="Home" Icon={HomeIcon} />
        <HeaderOption title="My Network" Icon={SupervisorAccountIcon} />
        <HeaderOption title="Jobs" Icon={BusinessCenterIcon} />
        <HeaderOption title="Messaging" Icon={ChatIcon} />
        <HeaderOption title="Notifucations" Icon={NotificationsActiveIcon} />
        <HeaderOption title="Me" avatar={me_photo} />
      </div>
    </div>
  );
};

export default Header;
