import React from "react";
import styles from "./AccordionInner.module.css";

const AccordionInner = props => {
  return (
    <div className={styles.wrapper}>
      <ul key={`accordionInner`}>
        {props.accordionItem.contents.map(content => (
          <li key={`${content}`} className={styles.list}>
            {content}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default AccordionInner;
