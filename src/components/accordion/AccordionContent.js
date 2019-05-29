import React from "react";

import ButtonAction from "../buttons/buttonAction/buttonAction";

const AccordionContent = props => (
  <div className="accordion__content">
    <div className="accordion__head">
      <h4>{props.item.name}</h4>
      <ButtonAction alter="btn-action-small" onClick={props.toggleAccordion}>
        +
      </ButtonAction>
    </div>
    <div className="accordion__body--closed">
      <ul className="accordion__body--list">
        {props.item.contents.map(item => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </div>
  </div>
);

export default AccordionContent;
