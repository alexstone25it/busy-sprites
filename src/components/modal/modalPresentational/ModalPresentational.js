import React from "react";
import styles from "./ModalPresentational.module.css";
import ButtonMinus from "../../buttons/buttonMinus/ButtonMinus";

const ModalPresentational = props => (
  <div className={styles.modalBackground} id="modal">
    <div className={styles.modal}>
      <div className={styles.modalHeader}>
        <span>{props.modalContent.title}</span>
        <span>
          <ButtonMinus onClick={props.toggleModal} />
        </span>
      </div>
      <div className={styles.modalBody}>
        {props.modalContent.body}
        {props.children}
      </div>

      <div className={styles.modalFooter}>{props.modalContent.footer}</div>
    </div>
  </div>
);
export default ModalPresentational;
