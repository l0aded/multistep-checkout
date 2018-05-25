var submitForm3 = (tab, credit, expire, cvv, billing) => ({
  //TODO:  Return some action object to change the currently playing video.
  type: "FORM3",
  payload: {
    tab: tab,
    credit: credit,
    expire: expire,
    cvv: cvv,
    billing: billing
  }
});

export default submitForm3;
