import React, { Fragment } from "react";

import DivWrapperPlain from "../../../components/wrappers/divs/divWrapperPlain/DivWrapperPlain";
import DivWrapperEmphasis from "../../../components/wrappers/divs/divWrapperEmphasis/DivWrapperEmphasis";
import PrimaryTxt from "../../../components/typography/text/paragraphs/PrimaryTxt/PrimaryTxt";
import Form from "../../../components/forms/Form";
import ModalComponent from "../../modal/ModalComponent";

import { INITIAL_FORM_STATE } from "./DATA/INITIAL_FORM_STATE";
import { FORM_INPUT_GROUPS } from "./DATA/FORM_INPUT_GROUPS";
import { MODAL_CONTACT_CONTENT } from "../../modal/DATA/MODAL_CONTENT";
import { MODAL_INPUT_GROUPS } from "../../modal/DATA/MODAL_INPUT_GROUPS";

import {
  MARGIN_TOP_FULL,
  MARGIN_TOP_HALF,
  MARGIN_BOTTOM_FULL,
  MARGIN_BOTTOM_HALF,
  MARGIN_SIDES_AUTO
} from "../PAGE_STYLES";

const Contact = () => (
  <Fragment>
    <DivWrapperEmphasis
      pageStyles={Object.assign(
        {},
        MARGIN_TOP_FULL,
        MARGIN_BOTTOM_FULL,
        MARGIN_SIDES_AUTO
      )}
    >
      <DivWrapperPlain direction="row">
        <PrimaryTxt>Already a customer?</PrimaryTxt>
        <ModalComponent
          modalContent={MODAL_CONTACT_CONTENT}
          modalInputGroups={MODAL_INPUT_GROUPS}
        />
      </DivWrapperPlain>
    </DivWrapperEmphasis>
    <DivWrapperEmphasis
      pageStyles={Object.assign({}, MARGIN_BOTTOM_FULL, MARGIN_SIDES_AUTO)}
    >
      <PrimaryTxt
        pageStyles={Object.assign(
          {},
          MARGIN_TOP_HALF,
          MARGIN_BOTTOM_HALF,
          MARGIN_SIDES_AUTO
        )}
      >
        Not yet a customer?
      </PrimaryTxt>
      <PrimaryTxt
        pageStyles={Object.assign({}, MARGIN_BOTTOM_HALF, MARGIN_SIDES_AUTO)}
      >
        Send us a message
      </PrimaryTxt>
      <DivWrapperEmphasis
        pageStyles={Object.assign({}, MARGIN_SIDES_AUTO, MARGIN_BOTTOM_HALF)}
      >
        <Form
          initialFormState={INITIAL_FORM_STATE}
          formInputGroups={FORM_INPUT_GROUPS}
        />
      </DivWrapperEmphasis>
    </DivWrapperEmphasis>
  </Fragment>
);

export default Contact;
