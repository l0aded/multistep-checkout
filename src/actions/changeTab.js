const changeTab = (tab) => ({
  //TODO:  Return some action object to change the currently playing video.
  type: "CHANGE_TAB",
  payload: {
    tab: tab
  }
});


export default changeTab;
