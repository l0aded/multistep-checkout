var submitForm2 = (tab, address1, address2, phone) => ({
  //TODO:  Return some action object to change the currently playing video.
  type: "FORM2",
  payload: {
    tab: tab,
    address1: address1,
    address2: address2,
    phone: phone
  }
});


export default submitForm2;
