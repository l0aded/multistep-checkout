var submitCart = (tab) => ({
  //TODO:  Return some action object to change the currently playing video.
  type: "SUBMIT_CART",
  payload: {
    tab: tab
  }
});

export default submitCart;
