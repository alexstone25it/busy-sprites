import React from "react";
import styles from "./PicSet.module.css";
import OnePic from "./OnePic/OnePic";

const PicSet = () => {
  const picArray = [
    {
      idKey: "PicSetCables",
      imgSrc: "cables",
      alt: "A photo of computer cables."
    },
    {
      idKey: "PicSetOffice",
      imgSrc: "office",
      alt: "A people working in an office."
    },
    {
      idKey: "PicSetHandshake",
      imgSrc: "handshake",
      alt: "A photo two hands being shaken over a table."
    },
    {
      idKey: "PicSetLaptop",
      imgSrc: "laptop",
      alt: "A photo of an open laptop."
    },
    {
      idKey: "PicSetMeeting",
      imgSrc: "meeting",
      alt: "A photo of a business meeting."
    },
    {
      idKey: "PicSetRobot",
      imgSrc: "robot",
      alt: "A photo of a white robot looking up."
    },
    {
      idKey: "PicSetTech",
      imgSrc: "tech",
      alt:
        "A photo taken from behind a man working in front of a computer screen."
    }
  ];
  return (
    <div className={styles.container}>
      {picArray.map(pic => (
        <OnePic item={pic} key={pic.idKey} />
      ))}
    </div>
  );
};
export default PicSet;
