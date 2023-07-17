import React, { Component } from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";
import { Transition } from "react-transition-group";

class App extends Component {
  constructor() {
    super();

    this.transitionStyle = {
      exiting: { opacity: 0 },
      exited: { opacity: 1 },
    };
  }

  state = {
    modalIsOpen: false,
    showBlock: false,
  };

  showModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button className="Button" onClick={() => this.setState((prevState) => ({ ...prevState, showBlock: !prevState.showBlock }))}>
          Toggle
        </button>
        <br />
        <Transition in={this.state.showBlock} timeout={300} mountOnEnter unmountOnExit>
          {(state) => {
            return (
              <div
                style={{
                  backgroundColor: "red",
                  width: "100px",
                  height: "100px",
                  margin: "auto",
                  transition: "all 0.3s ease-out",
                  opacity: state === "exiting" ? 0 : 1 && state === "entered" ? 1 : 0,
                }}
              />
            );
          }}
        </Transition>
        <Modal show={this.state.modalIsOpen} closed={this.closeModal} />
        {/* <Transition in={this.state.modalIsOpen} timeout={300} mountOnEnter unmountOnExit>
          {(state) => <Modal show={state} closed={this.closeModal} />}
        </Transition> */}
        {/* {this.state.modalIsOpen ? <Modal show={this.showModal} /> : <Modal closed={this.closeModal} />} */}
        {this.state.modalIsOpen ? <Backdrop show={this.state.modalIsOpen} /> : <Backdrop show={this.state.modalIsOpen} />}
        <button className="Button" onClick={this.showModal}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
