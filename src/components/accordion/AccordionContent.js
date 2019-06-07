import React from "react";

import ButtonSmall from "../buttons/buttonSmall/ButtonSmall";

const AccordionContent = props => (
  <div className="accordion__content">
    <header className="accordion__head">
      <h2>{props.item.name}</h2>
      <ButtonSmall
        alter="bg--primary txt--light"
        onClick={props.toggleAccordion}
      >
        +
      </ButtonSmall>
    </header>
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
