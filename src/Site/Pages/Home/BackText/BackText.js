import React from "react";
import styles from "./BackText.module.css";

import Button from "../../../../components/buttons/Button/Button";

const BackText = props => {
  const tar = props.target;
  let correctInfo;
  if (tar === "thought") {
    correctInfo =
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sin sunt in culpa qui officia deserunt mollit anim id est laborum.";
  } else if (tar === "design") {
    correctInfo =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat blandit aliquam etiam erat velit scelerisque in dictum non. Sit ametaliquam id diam.";
  } else if (tar === "application") {
    correctInfo =
      "Sit amet tellus cras adipiscing enim eu turpis. Fusce ut placera orci nulla pellentesque dignissim enim sit amet. Sollicitudin nib sit amet commodo.";
  } else if (tar === "security") {
    correctInfo =
      "Tortor at auctor urna nunc id cursus. Urna nunc id cursus metus aliquam eleifend mi in nulla. Nisl nunc mi ipsum faucibus  aliquet nec ullamcorper.";
  } else if (tar === "support") {
    correctInfo =
      "Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. Nibh mauris cursus mattis molestie a iaculis at erat pellentesque.";
  }
  return (
    <div className={styles.info}>
      <p>{correctInfo}</p>
      <Button type="general" extras="smallSquare" onClick={props.hideExtraInfo}>
        Know Less
      </Button>
    </div>
  );
};

export default BackText;
