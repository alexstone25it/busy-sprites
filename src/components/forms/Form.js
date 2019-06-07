import React, { Component } from "react";

import FormInputGroup from "./formComponents/FormInputGroup";
import Loader from "../loaders/Loader";
import ErrorComponent from "../transients/ErrorComponent";
import SuccessComponent from "../transients/SuccessComponent";

import { axiosBase } from "../../axios";

class Form extends Component {
  state = {
    ...this.props.initialFormState,
    isLoading: false,
    hasError: false,
    isSent: false
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
    this.setState({ isLoading: true });
    const newCustomer = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      companyname: this.state.companyname,
      telnum: this.state.telnum,
      email: this.state.email,
      message: this.state.message
    };
    axiosBase
      .post("/newcustomers.json", newCustomer)
      .then(response => {
        if (response.status === 200) {
          this.setState({
            ...this.props.initialFormState,
            isLoading: false,
            hasError: false,
            isSent: true
          });
          setTimeout(
            () =>
              this.setState({
                isSent: false
              }),
            8000
          );
        } else {
          this.setState({
            isLoading: false,
            hasError: true
          });
        }
      })
      .catch(error => {
        this.setState({ isLoading: false, hasError: true });
      });
  };
  render() {
    let formFooter = (
      <button type="submit" value="Submit">
        Send
      </button>
    );
    if (this.state.isLoading) {
      formFooter = <Loader className="circleSpinner" />;
    }
    if (this.state.hasError) {
      formFooter = (
        <ErrorComponent
          errorComponentMessage={this.props.errorComponentMessage}
        />
      );
    }
    if (this.state.isSent) {
      formFooter = (
        <SuccessComponent
          successComponentMessage={this.props.successComponentMessage}
        />
      );
    }
    return (
      <form onSubmit={this.onSubmitHandler}>
        <FormInputGroup
          inputGroups={this.props.formInputGroups}
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
        <div>{formFooter}</div>
      </form>
    );
  }
}
export default Form;
