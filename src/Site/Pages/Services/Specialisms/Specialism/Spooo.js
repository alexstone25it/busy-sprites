import React from "react";
import styles from "./Specialism.module.css";
import ButtonPlus from "../../../../../components/buttons/ButtonPlus/ButtonPlus";
import SkillPaper from "../SkillPapers/SkillPaper";

const Specialism = props => {
  let rightStyle;
  if (!props.hidden && props.skill.id === props.currSkillSet.id) {
    rightStyle = `itemPlay`;
  } else {
    rightStyle = `item`;
  }
  return (
    <div className={styles.wrapper}>
      <div className={[styles[`${rightStyle}`]]}>
        <h5 className={styles.itemTitle}>{props.skill.name}</h5>
        <ButtonPlus type="tinyPlus" onClick={props.addSkillSet(props.skill)} />
      </div>

      {!props.hidden && props.skill.id === props.currSkillSet.id ? (
        <SkillPaper skillSetsShowing={props.skillSetsShowing} />
      ) : null}
    </div>
  );
};

export default Specialism;
