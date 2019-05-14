import React from "react";

import { MODAL_CONTENT } from "./MODAL_CONTENT";
import ModalStateful from "../../../../components/modal/ModalStateful";
import ModalForm from "./ModalForm";

const ModalComponent = () => (
  <ModalStateful modalContent={MODAL_CONTENT}>
    <ModalForm />
  </ModalStateful>
);

export default ModalComponent;
