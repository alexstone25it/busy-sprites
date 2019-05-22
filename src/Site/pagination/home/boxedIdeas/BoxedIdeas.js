import React from "react";
import styles, {
  imgMeeting,
  imgLaptop,
  imgCode,
  imgMotherboard,
  imgOffice
} from "./BoxedIdeas.module.css";
import ButtonPrimary from "../../../../components/buttons/buttonPrimary/ButtonPrimary";

const BoxedIdeas = props => {
  const ideaArray = [
    {
      id: "thought",
      name: "thought",
      pic: imgMeeting,
      id1: "thoug",
      idea: "Thought",
      id2: "anunb",
      statement:
        "An unbiased range of options to suit your requirements, whatever they may be."
    },
    {
      id: "design",
      name: "design",
      pic: imgLaptop,
      id1: "desig",
      idea: "Design",
      id2: "sketc",
      statement:
        "Sketchboard solutions allowing you to visualise everything down to the smallest detail."
    },
    {
      id: "application",
      name: "application",
      pic: imgCode,
      id1: "appli",
      idea: "Application",
      id2: "wedoa",
      statement: "We do all the hard work for you."
    },
    {
      id: "security",
      name: "security",
      pic: imgMotherboard,
      id1: "secur",
      idea: "Security",
      id2: "anabs",
      statement: "An absolute necessity for you and your clients."
    },
    {
      id: "support",
      name: "support",
      pic: imgOffice,
      id1: "suppo",
      idea: "Support",
      id2: "wewil",
      statement: "We will be there for as long as you need us."
    }
  ];
  return (
    <div
      style={{
        transform: props.hidden ? `translateX(0)` : `translateX(-75%)`,
        transition: `1s`
      }}
    >
      {ideaArray.map(idea => (
        <div className={`${styles.box} ${idea.pic}`} key={idea.id}>
          <h6 className={styles.heading} key={idea.id1}>
            {idea.idea}
          </h6>
          <p className={styles.text} key={idea.id2}>
            {idea.statement}
          </p>
          <ButtonPrimary diffs="thinOblong" onClick={props.onClick(idea)}>
            Learn more
          </ButtonPrimary>
        </div>
      ))}
    </div>
  );
};

export default BoxedIdeas;
