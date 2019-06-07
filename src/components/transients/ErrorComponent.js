import React from "react";
import ButtonX from "../buttons/buttonX/ButtonX";

const ErrorComponent = ({ errorComponentMessage }) => (
  <div className="errorComponent">
    <h4>{errorComponentMessage}</h4>
    <ButtonX />
  </div>
);

export default ErrorComponent;
