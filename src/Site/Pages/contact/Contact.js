import React, { Component, Fragment } from "react";

import Div from "../../../components/wrappers/Div";
import BlueWrapper from "../../../components/wrappers/BlueWrapper";
import PrimaryTxt from "../../../components/typography/text/PrimaryTxt";
import Form from "./form/Form";
import ModalComponent from "./modal/ModalComponent";

class Contact extends Component {
  render() {
    return (
      <Fragment>
        <Div display="with2X2Grid">
          <PrimaryTxt>Already a customer?</PrimaryTxt>
          <ModalComponent />
        </Div>
        <Div display="with2X2Grid">
          <PrimaryTxt>Not yet a customer?</PrimaryTxt>
          <PrimaryTxt>Send us a message</PrimaryTxt>
        </Div>
        <BlueWrapper>
          <Form />
        </BlueWrapper>
      </Fragment>
    );
  }
}

export default Contact;
