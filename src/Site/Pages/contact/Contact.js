import React, { Component, Fragment } from "react";

import DivWrapper2x2Grid from "../../../components/wrappers/divs/DivWrapper2x2Grid/DivWrapper2x2Grid";
import DivWrapperEmphasis from "../../../components/wrappers/divs/divWrapperEmphasis/DivWrapperEmphasis";
import PrimaryTxt from "../../../components/typography/text/paragraphs/PrimaryTxt/PrimaryTxt";
import Form from "./form/Form";
import ModalComponent from "./modal/ModalComponent";
import { MODAL_CONTACT_CONTENT } from "./modal/MODAL_CONTENT";

class Contact extends Component {
  render() {
    return (
      <Fragment>
        <DivWrapper2x2Grid>
          <PrimaryTxt>Already a customer?</PrimaryTxt>
          <ModalComponent modalContent={MODAL_CONTACT_CONTENT} />
        </DivWrapper2x2Grid>
        <DivWrapper2x2Grid>
          <PrimaryTxt>Not yet a customer?</PrimaryTxt>
          <PrimaryTxt>Send us a message</PrimaryTxt>
        </DivWrapper2x2Grid>
        <DivWrapperEmphasis>
          <Form />
        </DivWrapperEmphasis>
      </Fragment>
    );
  }
}

export default Contact;
