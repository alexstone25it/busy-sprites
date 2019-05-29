import React, { Component } from "react";

import AccordionContent from "./AccordionContent";

class Accordion extends Component {
  toggleAccordionHandler = event => {
    const accordionBtn = event.target;
    const accordionBody = event.target.parentElement.nextElementSibling;
    if (accordionBody.className === "accordion__body--closed") {
      accordionBody.className = "accordion__body--open";
      accordionBtn.innerText = `-`;
    } else {
      accordionBody.className = "accordion__body--closed";
      accordionBtn.innerText = "+";
    }
  };
  render() {
    return (
      <div className="accordion">
        {this.props.dataArray.map(item => (
          <AccordionContent
            item={item}
            key={item.id}
            toggleAccordion={this.toggleAccordionHandler}
          />
        ))}
      </div>
    );
  }
}

export default Accordion;
