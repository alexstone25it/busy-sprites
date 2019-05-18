import React, { Component, Fragment } from "react";

import ButtonPrimary from "../buttons/buttonPrimary/ButtonPrimary";
import ModalStateless from "./ModalStateless";

class RenderModal extends Component {
  state = {
    isOpen: false
  };
  componentDidMount() {
    window.addEventListener("click", this.closeModalHandler);
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
          <ModalStateless
            modalContent={this.props.modalContent}
            toggleModal={this.toggleModalHandler}
          >
            {this.props.children}
          </ModalStateless>
        ) : null}

        <ButtonPrimary onClick={this.toggleModalHandler}>
          {this.props.modalContent.btnOpenTxt}
        </ButtonPrimary>
      </Fragment>
    );
  }
}

export default RenderModal;
