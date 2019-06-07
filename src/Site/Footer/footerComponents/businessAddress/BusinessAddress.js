import React from "react";

const BusinessAddress = () => {
  return (
    <address itemScope itemType="http://schema.org/Person">
      <span itemProp="name">Busy Sprites</span>
      <br />
      <div
        itemProp="address"
        itemScope
        itemType="http://schema.org/PostalAddress"
      >
        <span itemProp="streetAddress">
          house
          <br />
          street
          <br />
        </span>
        <span itemProp="addressLocality">city</span>
        <br />
        <span itemProp="postalCCode">postcode</span>
        <br />
      </div>
      <span itemProp="telephone">phone: 123456789</span>
      <br />
      <a href="mailto:email@email.com" itemProp="url">
        email: email@email.com
      </a>
    </address>
  );
};
export default BusinessAddress;
