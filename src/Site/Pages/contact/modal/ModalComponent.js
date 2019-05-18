import React from "react";

import ModalStateful from "../../../../components/modal/ModalStateful";
import ModalForm from "./ModalForm";

const ModalComponent = props => (
  <ModalStateful modalContent={props.modalContent}>
    <ModalForm />
  </ModalStateful>
);

export default ModalComponent;
