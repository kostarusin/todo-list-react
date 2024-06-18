import React from "react";
import { useState } from "react";
import {
  useFloating,
  useHover,
  useFocus,
  useInteractions,
} from "@floating-ui/react";
import { IconContext } from "react-icons";
import { TfiViewList } from "react-icons/tfi";

import style from "./ListBtn.module.css";

const ListBtn = () => {
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
          <TfiViewList />
        </IconContext.Provider>
      </div>
      {isOpen && (
        <div
          ref={refs.setFloating}
          style={floatingStyles}
          {...getFloatingProps()}
        >
          List wiew
        </div>
      )}
    </div>
  );
};

export default ListBtn;
