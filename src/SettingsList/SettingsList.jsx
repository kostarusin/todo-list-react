import React from "react";
import style from "./SettingsList.module.css";
import { IconContext } from "react-icons";
import { IoSettingsOutline } from "react-icons/io5";
import { TfiViewList } from "react-icons/tfi";
// import { TfiViewGrid } from "react-icons/tfi";
import { VscDebugRestart } from "react-icons/vsc";

const SettingsList = () => {
  return (
    <div className={style.SattingsWrap}>
      <IconContext.Provider value={{ color: "gray", size: "24px" }}>
        <div className={style.ItemsWrap}>
          <VscDebugRestart />
        </div>
      </IconContext.Provider>
      <IconContext.Provider value={{ color: "gray", size: "24px" }}>
        <div className={style.ItemsWrap}>
          <TfiViewList />
        </div>
      </IconContext.Provider>
      {/* <div><TfiViewGrid /></div> */}
      <IconContext.Provider value={{ color: "gray", size: "28px" }}>
        <div className={style.ItemsWrap}>
          <IoSettingsOutline />
        </div>
      </IconContext.Provider>
    </div>
  );
};

export default SettingsList;
