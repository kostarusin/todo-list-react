import React from "react";
import { IconContext } from "react-icons";
import { RxHamburgerMenu } from "react-icons/rx";

const MainMenu = () => {
  return (
    <div>
      <IconContext.Provider value={{ color: "#202124", size: "24" }}>
        <div>
          <RxHamburgerMenu />
        </div>
      </IconContext.Provider>
    </div>
  );
};

export default MainMenu;
