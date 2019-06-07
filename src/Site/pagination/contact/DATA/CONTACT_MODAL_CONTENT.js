export const CONTACT_MODAL_CONTENT = {
  title: "Log In",
  body: "",
  footer: "",
  btnClassNames: "btn--primary-fullColor txt--light ",
  btnOpenTxt: "Log In Here",
  btnCloseTxt: ""
};
export const CONTACT_MODAL_INPUT_GROUPS = [
  {
    key: "1",
    for: "username",
    labelText: "Username",
    showLabel: true,
    type: "text",
    name: "username",
    placeholder: "username",
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
