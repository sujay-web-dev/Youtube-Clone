import React, { useState } from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

function Header() {
  const [inputsearch, setinputsearch] = useState("");

  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <Link to="/">
        <img src="/logo1.png" className="header__logo" alt="SuTube" />
        </Link>
      </div>
      <div className="header__input">
        <input
          value={inputsearch}
          onChange={(e) => setinputsearch(e.target.value)}
          placeholder="Search"
          type="text"
        />
        <Link to={`/search/${inputsearch}`}>
          <SearchIcon className="header__inputbutton" />
        </Link>
      </div>

      <div className="header__icons">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <Avatar alt="Sujay V" src="/avatar.jpeg" />
      </div>
    </div>
  );
}

export default Header;
