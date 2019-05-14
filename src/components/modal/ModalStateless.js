import React from "react";
import styles from "./Modal.module.css";
import ButtonPrimary from "../buttons/buttonPrimary/ButtonPrimary";

const ModalStateless = props => (
  <div className={styles.modalBackground} id="modal">
    <div className={styles.modal}>
      <div className={styles.modalHeader}>
        <span>{props.modalContent.title}</span>
        <span>
          <ButtonPrimary onClick={props.toggleModal}>&times;</ButtonPrimary>
        </span>
        <div className={styles.modalBody}>
          {props.modalContent.body}
          {props.children}
        </div>
      </div>

      <div className={styles.modalFooter}>{props.modalContent.footer}</div>
    </div>
  </div>
);
export default ModalStateless;
