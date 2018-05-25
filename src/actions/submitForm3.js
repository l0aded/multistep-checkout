var submitForm3 = (tab, credit, expire, cvv, billing) => ({
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
