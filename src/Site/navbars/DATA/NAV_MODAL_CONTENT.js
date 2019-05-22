export const NAV_MODAL_CONTENT = {
  title: "Log In",
  body: "",
  footer: "",
  btnOpenTxt: "Log In",
  btnCloseTxt: ""
};
export const NAV_MODAL_INPUT_GROUPS = [
  {
    key: "1",
    for: "username",
    labelText: "Username",
    type: "text",
    name: "username",
    placeholder: "Username",
    required: true,
    formError: "usernameValid",
    formErrorMessage: "This field is required."
  },
  {
    key: "2",
    for: "password",
    labelText: "Password",
    type: "password",
    name: "password",
    placeholder: "Password",
    required: true,
    formError: "passwordValid",
    formErrorMessage: "This field is required."
  }
];
