import React from "react";
import classes from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";
import Aux from "../../../hoc/Auxiliary";

const modal = (props) => {
  return (
    <Aux>
      <Backdrop show={props.animate}
      clicked={props.modalClosed}/>
      <div
        className={classes.Modal}
        style={{
          transform: props.animate ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.animate ? "1" : "0",
        }}
      >
        {props.children}
      </div>
    </Aux>
  );
};

export default modal;
