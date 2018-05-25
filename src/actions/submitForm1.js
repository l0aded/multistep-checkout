var submitForm1 = (tab, name, email, password) => ({
  type: "FORM1",
  payload: {
    tab: tab,
    name: name,
    email: email,
    password: password
  }
});


export default submitForm1;
