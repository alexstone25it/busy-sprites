import React from "react";

import ModalStateful from "./modalLogic/ModalStateful";
import ModalForm from "./modalForm/ModalForm";

const ModalComponent = props => (
  <ModalStateful modalContent={props.modalContent}>
    <ModalForm modalInputGroups={props.modalInputGroups} />
  </ModalStateful>
);

export default ModalComponent;
