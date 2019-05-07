import React from "react";
import styles from "./Form.module.css";

import BtnPrimary from "../../../components/buttons/buttonPrimary/BtnPrimary";
import FormError from "./FormError";

const Form = props => (
  <form onSubmit={props.onSubmit}>
    <div className={styles.formBox}>
      <label htmlFor="firstname">First name</label>
      <input
        type="text"
        name="firstname"
        placeholder="First Name"
        required
        value={props.firstname}
        onChange={props.onChange}
      />
      <FormError formErrors={props.formErrors.firstname} />
    </div>
    <div className={styles.formBox}>
      <label htmlFor="lastname">Last Name</label>
      <input
        type="text"
        name="lastname"
        placeholder="Last Name"
        required
        value={props.lastname}
        onChange={props.onChange}
      />
      <FormError formErrors={props.formErrors.lastname} />
    </div>
    <div className={styles.formBox}>
      <label htmlFor="companyname">Name of company/business</label>
      <input
        type="text"
        name="companyname"
        placeholder="Company Name"
        value={props.companyname}
        onChange={props.onChange}
      />
    </div>
    <div className={styles.formBox}>
      <label htmlFor="telnum">Contact Telephone Number</label>
      <input
        type="tel"
        name="telnum"
        placeholder="Tel."
        value={props.telnum}
        onChange={props.onChange}
      />
    </div>
    <div className={styles.formBox}>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        value={props.email}
        onChange={props.onChange}
      />
      <FormError formErrors={props.formErrors.email} />
    </div>
    <div className={styles.formBox}>
      <label htmlFor="message">Message</label>
      <input
        type="textarea"
        name="message"
        placeholder="Please provide a short description of the services you require."
        required
        value={props.message}
        onChange={props.onChange}
      />
      <FormError formErrors={props.formErrors.message} />
    </div>
    <div className={styles.formBox}>
      <BtnPrimary
        diffs="smallSquare"
        shadow="blue"
        type="submit"
        value="Submit"
      >
        Submit
      </BtnPrimary>
    </div>
  </form>
);
export default Form;
