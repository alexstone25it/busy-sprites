import React from "react";
import styles from "./SkillPaper.module.css";

const SkillPaper = props => {
  return (
    <div className={styles.wrapper}>
      <ul key={`skillpaper`}>
        {props.skillset.skills.map(skill => (
          <li key={`${skill}`} className={styles.list}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default SkillPaper;
