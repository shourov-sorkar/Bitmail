import React from "react";
import style from "./Header.module.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AppsIcon from "@material-ui/icons/Apps";
import SettingsIcon from "@material-ui/icons/Settings";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { Avatar, IconButton } from "@material-ui/core";
import logo from "./Assets/img/bitmail.png";
function Header() {
  return (
    <div className={style.header}>
      <div className={style.header__left}>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img src={logo} alt="logo" />
      </div>

      <div className={style.header__middle}>
        <IconButton>
          <SearchIcon className={style.SearchMuiSvgIcon} />
        </IconButton>
        <input placeholder="Search mail" type="text" />
        <IconButton>
          <ArrowDropDownIcon className={style.header__inputCaret} />
        </IconButton>
      </div>

      <div className={style.header__right}>
        <IconButton>
          <HelpOutlineIcon />
        </IconButton>
        <IconButton>
          <SettingsIcon />
        </IconButton>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <Avatar className={style.avatar} />
      </div>
    </div>
  );
}

export default Header;
