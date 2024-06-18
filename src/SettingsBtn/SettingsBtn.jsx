import React from "react";
import { useState } from "react";
import {
  useFloating,
  useHover,
  useFocus,
  useInteractions,
} from "@floating-ui/react";
import { IconContext } from "react-icons";
import { IoSettingsOutline } from "react-icons/io5";

import style from "./SettingsBtn.module.css";

const SettingsBtn = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
  });

  const hover = useHover(context);
  const focus = useFocus(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    focus,
  ]);
  return (
    <div>
      <div
        role="button"
        ref={refs.setReference}
        {...getReferenceProps()}
        className={style.Button}
      >
        <IconContext.Provider value={{ className: style.Icon, size: 24 }}>
          <IoSettingsOutline />
        </IconContext.Provider>
      </div>
      {isOpen && (
        <div
          ref={refs.setFloating}
          style={floatingStyles}
          {...getFloatingProps()}
        >
          Settings
        </div>
      )}
    </div>
  );
};

export default SettingsBtn;
