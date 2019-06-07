export const NAV_MODAL_CONTENT = {
  title: "Log In",
  body: "",
  footer: "",
  btnClassNames: "btn--primary txt--light",
  btnOpenTxt: "Log In",
  btnCloseTxt: ""
};
export const NAV_MODAL_INPUT_GROUPS = [
  {
    key: "1",
    for: "username",
    labelText: "Username",
    showLabel: true,
    type: "text",
    name: "username",
    placeholder: "Username",
    showPlaceholder: false,
    required: true,
    formError: "usernameValid",
    formErrorMessage: "This field is required."
  },
  {
    key: "2",
    for: "password",
    labelText: "Password",
    showLabel: true,
    type: "password",
    name: "password",
    placeholder: "Password",
    showPlaceholder: false,
    required: true,
    formError: "passwordValid",
    formErrorMessage: "This field is required."
  }
];
