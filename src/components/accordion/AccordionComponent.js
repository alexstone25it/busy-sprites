import React, { Component, Fragment } from "react";
import DivWrapperPlain from "../wrappers/divs/divWrapperPlain/DivWrapperPlain";
import AccordionStateless from "./accordionStateless/AccordionStateless";
import AccordionInner from "./accordionInner/AccordionInner";

class AccordionComponent extends Component {
  state = {
    hidden: true,
    accordionItem: {}
  };
  showAccordionItemHandler = item => {
    this.setState({
      accordionItem: item,
      hidden: false
    });
  };
  hideAccordionItemHandler = () => {
    this.setState({
      accordionItem: {},
      hidden: true
    });
  };
  render() {
    return (
      <DivWrapperPlain pageStyles={this.props.pageStyles}>
        {this.props.dataArray.map(item => (
          <Fragment key={item.id}>
            <AccordionStateless
              item={item}
              showAccordionItem={this.showAccordionItemHandler}
              accordionItem={this.state.accordionItem}
              hideAccordionItem={this.hideAccordionItemHandler}
            />
            {!this.state.hidden && item.id === this.state.accordionItem.id ? (
              <AccordionInner
                item={item}
                accordionItem={this.state.accordionItem}
              />
            ) : null}
          </Fragment>
        ))}
      </DivWrapperPlain>
    );
  }
}

export default AccordionComponent;
