import React from "react";
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";
import { IconButton } from "@mui/material";
import TinderEmblem from "./assets/Tinder-Emblem.png";
import ForumIcon from "@mui/icons-material/Forum";

const Header = () => {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header__icon" />
      </IconButton>
      <img className="header__logo" src={TinderEmblem} alt="" />
      <IconButton>
        <ForumIcon fontSize="large" className="header__icon" />
      </IconButton>
    </div>
  );
};

export default Header;
