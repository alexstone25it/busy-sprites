import React, { Component } from "react";
import styles from "./Form.module.css";
import { FORM_INPUT_GROUPS } from "./FORM_INPUT_GROUPS";

import ButtonPrimary from "../../../../components/buttons/buttonPrimary/ButtonPrimary";
import FormInputGroup from "../../../../components/forms/FormInputGroup";

class Form extends Component {
  state = {
    firstname: "",
    lastname: "",
    companyname: "",
    telnum: "",
    email: "",
    message: "",
    touched: {
      firstname: false,
      lastname: false,
      companyname: false,
      telnum: false,
      email: false,
      message: false
    },
    formValid: {
      firstname: false,
      lastname: false,
      email: false,
      message: false
    },
    formErrors: []
  };
  onChangeHandler = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });

    this.validateInput(name, value);
  };
  validateInput = (name, value) => {
    switch (name) {
      case "firstname":
        let firstnameValid = value.length >= 1;
        this.setState({
          formValid: {
            ...this.state.formValid,
            firstname: firstnameValid
          }
        });
        break;
      case "lastname":
        let lastnameValid = value.length >= 2;
        this.setState({
          formValid: {
            ...this.state.formValid,
            lastname: lastnameValid
          }
        });
        break;
      case "email":
        let emailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
          value
        );
        this.setState({
          formValid: {
            ...this.state.formValid,
            email: emailValid
          }
        });
        break;
      case "message":
        let messageValid = value.length > 10;
        this.setState({
          formValid: {
            ...this.state.formValid,
            message: messageValid
          }
        });
        break;
      default:
        break;
    }
  };
  onBlurHandler = event => {
    const name = event.target.name;
    this.setState({
      touched: {
        ...this.state.touched,
        [name]: true
      }
    });
  };
  onSubmitHandler = event => {
    event.preventDefault();
    const values = Object.values(this.state.formValid);
    const keys = Object.keys(this.state.formValid);
    const invalids = [];
    for (let i = 0; i < values.length; i++) {
      if (values[i] === false) {
        invalids.push(keys[i]);
      }
    }
    if (!invalids.length) {
      this.submitFormToServer();
    } else {
      this.setState({
        formErrors: invalids
      });
    }
  };
  submitFormToServer = () => {
    console.log("to server");
    this.setState({
      firstname: "",
      lastname: "",
      companyname: "",
      telnum: "",
      email: "",
      message: "",
      touched: {
        firstname: false,
        lastname: false,
        companyname: false,
        telnum: false,
        email: false,
        message: false
      },
      formValid: {
        firstname: false,
        lastname: false,
        email: false,
        message: false
      },
      formErrors: []
    });
  };
  render() {
    return (
      <form onSubmit={this.onSubmitHandler} className={styles.form}>
        <FormInputGroup
          inputGroups={FORM_INPUT_GROUPS}
          onChange={this.onChangeHandler}
          onBlur={this.onBlurHandler}
          firstname={this.state.firstname}
          lastname={this.state.lastname}
          companyname={this.state.companyname}
          telnum={this.state.telnum}
          email={this.state.email}
          message={this.state.message}
          touched={this.state.touched}
          formValid={this.state.formValid}
          formErrors={this.state.formErrors}
        />
        <div>
          <ButtonPrimary
            diffs="smallSquare"
            boxShadow="boxShadowBlue"
            type="submit"
            value="Submit"
          >
            Submit
          </ButtonPrimary>
        </div>
      </form>
    );
  }
}
export default Form;
