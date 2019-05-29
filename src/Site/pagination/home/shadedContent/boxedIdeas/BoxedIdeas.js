import React from "react";
import styles, {
  imgMeeting,
  imgLaptop,
  imgCode,
  imgMotherboard,
  imgOffice
} from "./BoxedIdeas.module.css";
import ButtonAction from "../../../../../components/buttons/buttonAction/buttonAction";

const BoxedIdeas = props => {
  const dataArray = [
    {
      id: "thought",
      name: "thought",
      pic: imgMeeting,
      title: "Thought",
      text:
        "An unbiased range of options to suit your requirements, whatever they may be."
    },
    {
      id: "design",
      name: "design",
      pic: imgLaptop,
      title: "Design",
      text:
        "Sketchboard solutions allowing you to visualise everything down to the smallest detail."
    },
    {
      id: "application",
      name: "application",
      pic: imgCode,
      title: "Application",
      text: "We do all the hard work for you."
    },
    {
      id: "security",
      name: "security",
      pic: imgMotherboard,
      title: "Security",
      text: "An absolute necessity for you and your clients."
    },
    {
      id: "support",
      name: "support",
      pic: imgOffice,
      title: "Support",
      text: "We will be there for as long as you need us."
    }
  ];
  return (
    <div
      style={{
        transform: props.hidden ? `translateX(0)` : `translateX(-75%)`,
        transition: `1s`
      }}
    >
      {dataArray.map(item => (
        <div className={`${styles.wrapper} ${item.pic}`} key={item.id}>
          <h4 className={styles.title}>{item.title}</h4>
          <p className={styles.text}>{item.text}</p>
          <ButtonAction
            alter="btn-action-primary padding-norm txt-light"
            onClick={props.onClick(item)}
          >
            Learn more
          </ButtonAction>
        </div>
      ))}
    </div>
  );
};

export default BoxedIdeas;
