import React from "react";
import { useState } from "react";
import {
  useFloating,
  useHover,
  useFocus,
  useInteractions,
} from "@floating-ui/react";
import { IconContext } from "react-icons";
import { VscDebugRestart } from "react-icons/vsc";
import style from "./RefreshBtn.module.css";

const RefreshBtn = () => {
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
          <VscDebugRestart />
        </IconContext.Provider>
      </div>
      {isOpen && (
        <div
          ref={refs.setFloating}
          style={floatingStyles}
          {...getFloatingProps()}
        >
          Refresh
        </div>
      )}
    </div>
  );
};

export default RefreshBtn;
