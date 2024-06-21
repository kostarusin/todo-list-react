import React from "react";
import { useState, useRef, useEffect } from "react";
import {
  useFloating,
  useHover,
  useFocus,
  useInteractions,
} from "@floating-ui/react";
import { IconContext } from "react-icons";

import style from "./FloatingSuggestions.module.css";

const FloatindSuggestions = ({ icon: Icon, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef(null);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: (open) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (open) {
        timeoutRef.current = setTimeout(() => {
          setIsOpen(true);
        }, 300);
      } else {
        setIsOpen(false);
      }
    },
  });

  const hover = useHover(context);
  const focus = useFocus(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    focus,
  ]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div>
      <div
        role="button"
        ref={refs.setReference}
        {...getReferenceProps()}
        className={style.Button}
      >
        <IconContext.Provider value={{ className: style.Icon, size: 24 }}>
          <Icon />
        </IconContext.Provider>
      </div>
      {isOpen && (
        <div
          className={style.FloatingEl}
          ref={refs.setFloating}
          style={floatingStyles}
          {...getFloatingProps()}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default FloatindSuggestions;
