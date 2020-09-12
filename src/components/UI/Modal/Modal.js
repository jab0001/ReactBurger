import React from "react";
import classes from "./Modal.module.css";

const modal = (props) => {
  return (
    <div
      className={classes.Modal}
      style={{
        transform: props.animate ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.animate ? "1" : "0",
      }}
    >
      {props.children}
    </div>
  );
};

export default modal;
