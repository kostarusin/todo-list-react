import React from "react";
import style from "./SettingsList.module.css";
import FloatingSuggestions from "../FloatingSuggestions/FloatingSuggestions";
import { VscDebugRestart } from "react-icons/vsc";
import { TfiViewList } from "react-icons/tfi";
import { IoSettingsOutline } from "react-icons/io5";
// import { TfiViewGrid } from "react-icons/tfi";

const SettingsList = () => {
  return (
    <div className={style.SattingsWrap}>
      <FloatingSuggestions
        icon={VscDebugRestart}
        content={<div>Refresh</div>}
      />
      <FloatingSuggestions icon={TfiViewList} content={<div>List wiew</div>} />
      <FloatingSuggestions
        icon={IoSettingsOutline}
        content={<div>Settings</div>}
      />
    </div>
  );
};

export default SettingsList;
