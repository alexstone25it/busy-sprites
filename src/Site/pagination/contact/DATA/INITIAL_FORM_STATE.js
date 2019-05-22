export const INITIAL_FORM_STATE = {
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
