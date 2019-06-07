import React from "react";
import FormError from "./FormError";

const errorBorder = {
  border: "1px solid red"
};
const untouchedBorder = {
  border: "1px solid blue"
};
const successBorder = {
  border: "1px solid green"
};

const FormInputGroup = props => {
  return props.inputGroups.map(inputGroup => (
    <div key={inputGroup.key}>
      <label
        htmlFor={inputGroup.for}
        style={inputGroup.showLabel === true ? null : { display: "none" }}
      >
        {inputGroup.labelText}
      </label>
      <input
        style={
          inputGroup.hasOwnProperty("formError") &&
          props.touched[inputGroup.name] === true &&
          props.formValid[inputGroup.name] === false
            ? errorBorder
            : !inputGroup.hasOwnProperty("formError") &&
              props.touched[inputGroup.name] === true
            ? successBorder
            : inputGroup.hasOwnProperty("formError") &&
              props.touched[inputGroup.name] === true &&
              props.formValid[inputGroup.name] === true
            ? successBorder
            : untouchedBorder
        }
        type={inputGroup.type}
        name={inputGroup.name}
        placeholder={inputGroup.showPlaceholder ? inputGroup.placeholder : null}
        value={props[inputGroup.name]}
        required={inputGroup.required}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
      {inputGroup.hasOwnProperty("formError") &&
      props.formErrors.includes(inputGroup.name) ? (
        <FormError errorMessage={inputGroup.formErrorMessage} />
      ) : null}
    </div>
  ));
};

export default FormInputGroup;
