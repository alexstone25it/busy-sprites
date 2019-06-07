export const FORM_INPUT_GROUPS = [
  {
    key: "1",
    for: "firstname",
    labelText: "First Name",
    showLabel: false,
    type: "text",
    name: "firstname",
    placeholder: "First Name",
    showPlaceholder: true,
    required: true,
    formError: "firstnameValid",
    formErrorMessage: "This field must include at least one character."
  },
  {
    key: "2",
    for: "lastname",
    labelText: "Last Name",
    showLabel: false,
    type: "text",
    name: "lastname",
    placeholder: "Last Name",
    showPlaceholder: true,
    required: true,
    formError: "lastnameValid",
    formErrorMessage: "This field must include at least two characters."
  },
  {
    key: "3",
    for: "companyname",
    labelText: "Company Name",
    showLabel: false,
    type: "text",
    name: "companyname",
    placeholder: "Company Name",
    showPlaceholder: true,
    required: false
  },
  {
    key: "4",
    for: "telnum",
    labelText: "Contact Telephone Number",
    showLabel: false,
    type: "tel",
    name: "telnum",
    placeholder: "Tel.",
    showPlaceholder: true,
    required: false
  },
  {
    key: "5",
    for: "email",
    labelText: "Email",
    showLabel: false,
    type: "email",
    name: "email",
    placeholder: "Email",
    showPlaceholder: true,
    required: true,
    formError: "emailValid",
    formErrorMessage: "Please enter a valid email address."
  },
  {
    key: "6",
    for: "message",
    labelText: "Message",
    showLabel: true,
    type: "textarea",
    name: "message",
    placeholder:
      "Please provide a description of the services you might require.",
    showPlaceholder: true,
    required: true,
    formError: "messageValid",
    formErrorMessage:
      "Please provide a description of the services you might require."
  }
];
