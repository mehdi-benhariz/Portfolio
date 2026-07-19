import React from "react";
import useReveal from "../hooks/useReveal";

const Reveal = ({ as: Tag = "div", className = "", delay = 0, children, ...rest }) => {
  const ref = useReveal();

  return (
    <Tag
      ref={ref}
      className={`cine-reveal ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
