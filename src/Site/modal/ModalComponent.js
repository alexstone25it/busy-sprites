import React from "react";

import ModalStateful from "./ModalStateful";
import ModalForm from "./ModalForm";

const ModalComponent = props => (
  <ModalStateful modalContent={props.modalContent}>
    <ModalForm modalInputGroups={props.modalInputGroups} />
  </ModalStateful>
);

export default ModalComponent;
