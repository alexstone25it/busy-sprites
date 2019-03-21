import React from "react";
import styles from "./SkillPaper.module.css";

const SkillPaper = props => {
  if (props.hidden) {
    return null;
  } else {
    const id = props.skill.id;
    const sets = props.skillSetsShowing;
    return sets.map(set =>
      set.id === id ? (
        <div className={styles.wrapper}>
          <ul>
            <li key={`${set.id}skills`} className={styles.list}>
              {set.skills}
              make the plus button into a minus sign from specialism
            </li>
          </ul>
        </div>
      ) : null
    );
  }
};
/*
function paper(item) {
  const one = item.map(item => (
    
  ));
  return one;
}*/
export default SkillPaper;
