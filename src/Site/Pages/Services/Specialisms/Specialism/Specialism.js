import React from "react";
import styles from "./Specialism.module.css";
import ButtonPlus from "../../../../../components/buttons/buttonPlus/ButtonPlus";
import ButtonMinus from "../../../../../components/buttons/buttonMinus/ButtonMinus";

const Specialism = props => {
  let rightStyle;
  if (props.skillset.id === props.item.id) {
    rightStyle = "itemChosen";
  } else {
    rightStyle = "item";
  }
  return (
    <div className={styles.wrapper}>
      <div className={[styles[`${rightStyle}`]]}>
        <h5 className={styles.title}>{props.item.name}</h5>
        {props.skillset.id !== props.item.id ? (
          <ButtonPlus onClick={e => props.addSkillSet(props.item, e)} />
        ) : (
          <ButtonMinus onClick={props.minusSkillSet} />
        )}
      </div>
    </div>
  );
};

export default Specialism;
