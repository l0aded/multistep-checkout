var submitForm1 = (tab, name, email, password) => ({
  //TODO:  Return some action object to change the currently playing video.
  type: "FORM1",
  payload: {
    tab: tab,
    name: name,
    email: email,
    password: password
  }
});


export default submitForm1;
