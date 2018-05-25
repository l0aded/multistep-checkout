import Redux from 'redux';

const formReducer = (state = {}, action) => {
  switch(action.type) {
    case 'FORM1':
      return Object.assign({}, state, action.payload)
    case 'FORM2':
      return Object.assign({}, state, action.payload)
    case 'FORM3':
      return Object.assign({}, state, action.payload)
    case 'SUBMIT_CART':
      return Object.assign({}, state, action.payload)
    default:
      return state;
  }
};

export default formReducer;
