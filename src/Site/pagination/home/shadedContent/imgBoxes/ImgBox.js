import React from "react";

import Button from "../../../../../components/buttons/button/Button";

const BoxedIdeas = props => {
  const dataArray = [
    {
      id: "thought",
      name: "thought",
      pic: "imgMeeting",
      title: "Thought",
      text:
        "An unbiased range of options to suit your requirements, whatever they may be."
    },
    {
      id: "design",
      name: "design",
      pic: "imgLaptop",
      title: "Design",
      text:
        "Sketchboard solutions allowing you to visualise everything down to the smallest detail."
    },
    {
      id: "application",
      name: "application",
      pic: "imgCode",
      title: "Application",
      text: "We do all the hard work for you."
    },
    {
      id: "security",
      name: "security",
      pic: "imgMotherboard",
      title: "Security",
      text: "An absolute necessity for you and your clients."
    },
    {
      id: "support",
      name: "support",
      pic: "imgOffice",
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
        <section className={["imgBox", [item.pic]].join(" ")} key={item.id}>
          <header>
            <h2 className="imgBox__heading">{item.title}</h2>
          </header>
          <p className="imgBox__content">{item.text}</p>
          <Button alter="txt--light" onClick={props.onClick(item)}>
            Learn more
          </Button>
        </section>
      ))}
    </div>
  );
};

export default BoxedIdeas;
