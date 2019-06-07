import React from "react";

import Modal from "../../components/modal/Modal";
import ModalForm from "./ModalForm";

const ModalComponent = props => (
  <Modal modalContent={props.modalContent}>
    <ModalForm modalInputGroups={props.modalInputGroups} />
  </Modal>
);

export default ModalComponent;
