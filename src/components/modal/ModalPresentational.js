import React from "react";
import ButtonSmall from "../buttons/buttonSmall/ButtonSmall";

const ModalPresentational = props => (
  <section className="modal__background" id="modal">
    <div className="modal__container">
      <header className="modal__head">
        <span role="heading" className="modal__head__title">
          {props.modalContent.title}
        </span>
        <span>
          <ButtonSmall
            alter="bg--tertiary txt--colored"
            onClick={props.toggleModal}
          >
            -
          </ButtonSmall>
        </span>
      </header>
      <div className="modal__body">
        {props.modalContent.body}
        {props.children}
      </div>

      <footer className="modal__footer">{props.modalContent.footer}</footer>
    </div>
  </section>
);
export default ModalPresentational;
