import React, { Component, Fragment } from "react";

import ModalPresentational from "./ModalPresentational";

class Modal extends Component {
  state = {
    isOpen: false
  };
  componentDidMount() {
    window.addEventListener("click", this.closeModalHandler);
    console.log(this.props.modalBtnType);
  }
  componentWillUnmount() {
    window.removeEventListener("click", this.closeModalHandler);
  }
  toggleModalHandler = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  closeModalHandler = e => {
    const modalDiv = document.getElementById("modal");
    if (e.target === modalDiv) {
      this.setState({
        isOpen: false
      });
    }
  };
  render() {
    return (
      <Fragment>
        {this.state.isOpen ? (
          <ModalPresentational
            modalContent={this.props.modalContent}
            toggleModal={this.toggleModalHandler}
          >
            {this.props.children}
          </ModalPresentational>
        ) : null}

        <button
          className={this.props.modalContent.btnClassNames}
          onClick={this.toggleModalHandler}
        >
          {this.props.modalContent.btnOpenTxt}
        </button>
      </Fragment>
    );
  }
}

export default Modal;
