export const FORM_INPUT_GROUPS = [
  {
    key: "1",
    for: "firstname",
    labelText: "First Name",
    type: "text",
    name: "firstname",
    placeholder: "First Name",
    required: true,
    formError: "firstnameValid",
    formErrorMessage: "This field must include at least one character."
  },
  {
    key: "2",
    for: "lastname",
    labelText: "Last Name",
    type: "text",
    name: "lastname",
    placeholder: "Last Name",
    required: true,
    formError: "lastnameValid",
    formErrorMessage: "This field must include at least two characters."
  },
  {
    key: "3",
    for: "companyname",
    labelText: "Company Name",
    type: "text",
    name: "companyname",
    placeholder: "Company Name",
    required: false
  },
  {
    key: "4",
    for: "telnum",
    labelText: "Contact Telephone Number",
    type: "tel",
    name: "telnum",
    placeholder: "Tel.",
    required: false
  },
  {
    key: "5",
    for: "email",
    labelText: "Email",
    type: "email",
    name: "email",
    placeholder: "Email",
    required: true,
    formError: "emailValid",
    formErrorMessage: "Please enter a valid email address."
  },
  {
    key: "6",
    for: "message",
    labelText: "Message",
    type: "textarea",
    name: "message",
    placeholder:
      "Please provide a description of the services you might require.",
    required: true,
    formError: "messageValid",
    formErrorMessage:
      "Please provide a description of the services you might require."
  }
];
