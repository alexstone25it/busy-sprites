import React, { Component } from "react";

import FormInputGroup from "../../forms/formComponents/FormInputGroup";

class ModalForm extends Component {
  state = {
    username: "",
    password: "",
    touched: {
      username: false,
      password: false
    },
    formValid: {
      username: false,
      password: false
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
      case "username":
        let usernameValid = value.length >= 1;
        this.setState({
          formValid: {
            ...this.state.formValid,
            username: usernameValid
          }
        });
        break;
      case "password":
        let passwordValid = value.length >= 2;
        this.setState({
          formValid: {
            ...this.state.formValid,
            password: passwordValid
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
    this.setState({
      username: "",
      password: "",
      touched: {
        username: false,
        password: false
      },
      formValid: {
        username: false,
        password: false
      },
      formErrors: []
    });
  };
  render() {
    return (
      <form onSubmit={this.onSubmitHandler}>
        <FormInputGroup
          inputGroups={this.props.modalInputGroups}
          onChange={this.onChangeHandler}
          onBlur={this.onBlurHandler}
          username={this.state.username}
          password={this.state.password}
          touched={this.state.touched}
          formValid={this.state.formValid}
          formErrors={this.state.formErrors}
        />
      </form>
    );
  }
}

export default ModalForm;
