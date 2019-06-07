import React from "react";

const Portrait = ({ item }) => (
  <figure>
    <header>
      <h6>{item.name}</h6>
    </header>
    <img
      src={require(`../../../assets/images/${item.src}.jpg`)}
      alt={item.alt}
    />
    <footer>
      <figcaption>{item.text}</figcaption>
    </footer>
  </figure>
);

export default Portrait;
