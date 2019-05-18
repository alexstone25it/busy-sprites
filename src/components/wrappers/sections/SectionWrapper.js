import React from "react";
import styles from "./SectionWrapper.module.css";

const SectionWrapper = props => (
  <section className={styles.wrapper}>{props.children}</section>
);

export default SectionWrapper;
