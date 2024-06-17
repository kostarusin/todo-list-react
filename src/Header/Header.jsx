import React from "react";
import MainLogo from "../MainLogo/MainLogo";
import MainMenu from "../MainMenu/MainMenu";
import Searchbar from "../Searchbar/Searchbar";
import SettingsList from "../SettingsList/SettingsList";
import UserNav from "../UserNav/UserNav";
import style from "./Header.module.css";

const Header = () => {
  return (
    <div className={style.HeaderWrap}>
      {<MainMenu />}
      {<MainLogo />}
      {<Searchbar />}
      {<SettingsList />}
      {<UserNav />}
    </div>
  );
};

export default Header;
