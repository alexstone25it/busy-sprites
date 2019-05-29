import React, { Component, Fragment } from "react";

import ButtonAction from "../../buttons/buttonAction/buttonAction";
import ModalPresentational from "../modalPresentational/ModalPresentational";

class ModalStateful extends Component {
  state = {
    isOpen: false
  };
  componentDidMount() {
    window.addEventListener("click", this.closeModalHandler);
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

        <ButtonAction
          alter="btn-action-primary padding-norm txt-light"
          onClick={this.toggleModalHandler}
        >
          {this.props.modalContent.btnOpenTxt}
        </ButtonAction>
      </Fragment>
    );
  }
}

export default ModalStateful;
