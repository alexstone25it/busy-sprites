import React from "react";
import styles from "./BusinessAddress.module.css";

const BusinessAddress = () => {
  return (
    <address className={styles.address}>
      Busy Sprites
      <br />
      house
      <br />
      street
      <br />
      city
      <br />
      postcode
      <br />
      phone: 123456789
      <br />
      email: email@email.com
    </address>
  );
};
export default BusinessAddress;
