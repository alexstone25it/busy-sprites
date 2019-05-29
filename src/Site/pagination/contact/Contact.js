import React, { Fragment } from "react";

import DivWrapper from "../../../components/wrappers/DivWrapper";
import PrimaryTxt from "../../../components/typography/text/text/PrimaryTxt";
import Form from "../../../components/forms/Form";
import ModalComponent from "../../../components/modal/ModalComponent";

import { INITIAL_FORM_STATE } from "./DATA/INITIAL_FORM_STATE";
import { FORM_INPUT_GROUPS } from "./DATA/FORM_INPUT_GROUPS";
import {
  CONTACT_MODAL_CONTENT,
  CONTACT_MODAL_INPUT_GROUPS
} from "./DATA/CONTACT_MODAL_CONTENT";
import {
  CONTACT_ERROR_MESSAGE,
  CONTACT_SUCCESS_MESSAGE
} from "./DATA/CONTACT_TRANSIENT_MESSAGES";

const Contact = () => (
  <Fragment>
    <DivWrapper alter="wrapper-emphasis margins--top-full margins--bottom-full margins--lr-any">
      <DivWrapper alter="wrapper-row">
        <PrimaryTxt alter="txt-normal">Already a customer?</PrimaryTxt>
        <ModalComponent
          modalContent={CONTACT_MODAL_CONTENT}
          modalInputGroups={CONTACT_MODAL_INPUT_GROUPS}
        />
      </DivWrapper>
    </DivWrapper>
    <DivWrapper alter="wrapper-row wrapper-emphasis margins--bottom-full margins--lr-any">
      <PrimaryTxt alter="txt-normal margins--top-half margins--bottom-half margins--lr-any">
        Not yet a customer?
      </PrimaryTxt>
      <PrimaryTxt alter="txt-normal margins--bottom-half margins--lr-any">
        Send us a message
      </PrimaryTxt>
      <DivWrapper alter="wrapper-emphasis margins--lr-any margins--bottom-half">
        <Form
          initialFormState={INITIAL_FORM_STATE}
          formInputGroups={FORM_INPUT_GROUPS}
          errorComponentMessage={CONTACT_ERROR_MESSAGE}
          successComponentMessage={CONTACT_SUCCESS_MESSAGE}
        />
      </DivWrapper>
    </DivWrapper>
  </Fragment>
);

export default Contact;
