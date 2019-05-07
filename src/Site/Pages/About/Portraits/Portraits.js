import React, { Component } from "react";
import styles from "./Portraits.module.css";

import Portrait from "./portrait/Portrait";

class Portraits extends Component {
  render() {
    const consultants = [
      {
        name: "Albert Albus",
        id: "consultant1",
        alt: "A photo of Albert Albus, consultant at Busy Sprites.",
        imgSrc: "consultant-1",
        text:
          "Lorem ipsum dolor sit amet, nominavi eligendi his te, sea odio prompta nonumes an. Pro eu scripta rationibus, nominavi postulant."
      },
      {
        name: "Beatrice Bardot",
        id: "consultant2",
        alt: "A photo of Beatrice Bardot, consultant at Busy Sprites.",
        imgSrc: "consultant-2",
        text:
          "Lorem ipsum dolor sit amet, nominavi eligendi his te, sea odio prompta nonumes an. Pro eu scripta rationibus, nominavi postulant."
      },
      {
        name: "Calvin Cool",
        id: "consultant3",
        alt: "A photo of Calvin Cool, consultant at Busy Sprites.",
        imgSrc: "consultant-3",
        text:
          "Lorem ipsum dolor sit amet, nominavi eligendi his te, sea odio prompta nonumes an. Pro eu scripta rationibus, nominavi postulant."
      },
      {
        name: "Diedre Darling",
        id: "consultant4",
        alt: "A photo of Diedre Darling, consultant at Busy Sprites.",
        imgSrc: "consultant-4",
        text:
          "Lorem ipsum dolor sit amet, nominavi eligendi his te, sea odio prompta nonumes an. Pro eu scripta rationibus, nominavi postulant."
      },
      {
        name: "Edgar Earling",
        id: "consultant5",
        alt: "A photo of Edgar Earling, consultant at Busy Sprites.",
        imgSrc: "consultant-5",
        text:
          "Lorem ipsum dolor sit amet, nominavi eligendi his te, sea odio prompta nonumes an. Pro eu scripta rationibus, nominavi postulant."
      }
    ];
    return (
      <div className={styles.wrapper}>
        {consultants.map(consultant => (
          <Portrait item={consultant} key={consultant.id} />
        ))}
      </div>
    );
  }
}

export default Portraits;
