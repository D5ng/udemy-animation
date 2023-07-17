import React from "react";
import "./Modal.css";
import { Transition } from "react-transition-group";

const animationTiming = {
  enter: 400,
  exit: 1000,
};

const modal = (props) => {
  return (
    <Transition in={props.show} timeout={animationTiming} mountOnEnter unmountOnExit>
      {(state) => {
        const cssClass = ["Modal", state === "entering" ? "Modal ModalOpen" : state === "exiting" ? "Modal ModalClosed" : "Modal"];
        return (
          <div className={cssClass.join(" ")}>
            <h1>A Modal</h1>
            <button className="Button" onClick={props.closed}>
              Dismiss
            </button>
          </div>
        );
      }}
    </Transition>
  );
};

export default modal;
