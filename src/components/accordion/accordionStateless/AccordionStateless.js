import React from "react";
import styles from "./AccordionStateless.module.css";
import ButtonPlus from "../../buttons/buttonPlus/ButtonPlus";
import ButtonMinus from "../../buttons/buttonMinus/ButtonMinus";

const AccordionStateless = props => {
  let rightStyle;
  if (props.accordionItem.id === props.item.id) {
    rightStyle = "itemChosen";
  } else {
    rightStyle = "item";
  }
  return (
    <div className={styles.wrapper}>
      <div className={[styles[`${rightStyle}`]]}>
        <h5 className={styles.title}>{props.item.name}</h5>
        {props.accordionItem.id !== props.item.id ? (
          <ButtonPlus onClick={e => props.showAccordionItem(props.item, e)} />
        ) : (
          <ButtonMinus onClick={props.hideAccordionItem} />
        )}
      </div>
    </div>
  );
};

export default AccordionStateless;
