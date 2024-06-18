import React from "react";
import style from "./SettingsList.module.css";
import RefreshBtn from "../RefreshBtn/RefreshBtn";
import ListBtn from "../ListBtn/ListBtn";
import SettingsBtn from "../SettingsBtn/SettingsBtn";
// import { TfiViewGrid } from "react-icons/tfi";

const SettingsList = () => {
  return (
    <div className={style.SattingsWrap}>
      <RefreshBtn />
      <ListBtn />
      <SettingsBtn />
    </div>
  );
};

export default SettingsList;
