import React from "react";

import BoxedTxt from "../../../components/typography/text/text/BoxedTxt";
import OutlinedContainer from "../../../components/boxes/OutlinedContainer";
import Form from "../../../components/forms/Form";
import ModalComponent from "../../modal/ModalComponent";

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

const Contact = () => {
  const addedStyles = {
    firstDiv: {
      justifyContent: "space-around"
    },
    secondDiv: { justifyContent: "stretch" }
  };
  return (
    <main role="main">
      <OutlinedContainer
        flow="row"
        alter="margins--top-full margins--bottom-full margins--lr-any"
      >
        <BoxedTxt>Already a customer?</BoxedTxt>
        <ModalComponent
          modalContent={CONTACT_MODAL_CONTENT}
          modalInputGroups={CONTACT_MODAL_INPUT_GROUPS}
        />
      </OutlinedContainer>
      <OutlinedContainer
        flow="col"
        alter="margins--bottom-full margins--lr-any"
      >
        <OutlinedContainer
          flow="col"
          alter="margins--top-half margins--bottom-half margins--lr-any"
        >
          <div
            className="flex--row margins--top-half margins--bottom-half margins--lr-any"
            style={addedStyles.firstDiv}
          >
            <BoxedTxt>Not yet a customer?</BoxedTxt>
            <BoxedTxt>Send us a message</BoxedTxt>
          </div>
          <div
            className="flex--col margins--lr-any margins--bottom-half"
            style={addedStyles.secondDiv}
          >
            <Form
              role="form"
              initialFormState={INITIAL_FORM_STATE}
              formInputGroups={FORM_INPUT_GROUPS}
              errorComponentMessage={CONTACT_ERROR_MESSAGE}
              successComponentMessage={CONTACT_SUCCESS_MESSAGE}
            />
          </div>
        </OutlinedContainer>
      </OutlinedContainer>
    </main>
  );
};

export default Contact;
