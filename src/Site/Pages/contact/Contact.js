import React, { Component } from "react";
import styles from "./Contact.module.css";

import BlueWrapper from "../../../components/wrappers/BlueWrapper";

import Form from "./Form";

class Contact extends Component {
  state = {
    firstname: "",
    lastname: "",
    companyname: "",
    telnum: "",
    email: "",
    message: "",
    formErrors: {
      firstname: "",
      lastname: "",
      email: "",
      message: ""
    },
    firstnameValid: false,
    lastnameValid: false,
    emailValid: false,
    messageValid: false
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
        let firstnameValid = value.length > 0;
        this.setState({
          firstnameValid: firstnameValid
        });
        break;
      case "lastname":
        let lastnameValid = value.length > 1;
        this.setState({
          lastnameValid: lastnameValid
        });
        break;
      case "email":
        let emailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
          value
        );
        this.setState({
          emailValid: emailValid
        });
        break;
      case "message":
        let messageValid = value.length > 10;
        this.setState({
          messageValid: messageValid
        });
        break;
      default:
        break;
    }
  };
  onSubmitHandler = event => {
    event.preventDefault();

    this.state.firstnameValid &&
    this.state.lastnameValid &&
    this.state.emailValid &&
    this.state.messageValid
      ? console.log("to server")
      : console.log("make an error plan");
  };
  render() {
    return (
      <BlueWrapper>
        <Form
          onChange={this.onChangeHandler}
          onSubmit={this.onSubmitHandler}
          lastname={this.state.lastname}
          firstname={this.state.firstname}
          companyname={this.state.companyname}
          telnum={this.state.telnum}
          email={this.state.email}
          message={this.state.message}
          formErrors={this.state.formErrors}
        />
      </BlueWrapper>
    );
  }
}

export default Contact;
