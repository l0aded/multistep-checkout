import Redux from 'redux';

// state
const formReducer = (state = {}, action) => {
  // console.log('triggered, state: ', state)
  // console.log('triggered, action: ', action)
  // console.log('object assign', Object.assign({}, state, action.payload))
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




// const form1Reducer = (state = {}, action) => {
//   switch(action.type) {
//     case 'FORM1':
//       return action.payload;
//
//       return Object.assign({}, state, {
//       [name]: itemsInUserReducer(state[action.userId], action)
//     })
//
//     default:
//       return state;
//   }
// };
//
// const form2Reducer = (state = {}, action) => {
//   switch(action.type) {
//     case 'FORM2':
//       return action.payload;
//     default:
//       return state;
//   }
// };
//
// const form3Reducer = (state = {}, action) => {
//   switch(action.type) {
//     case 'FORM3':
//       return action.payload;
//     default:
//       return state;
//   }
// };

// export default { form1Reducer, form2Reducer, form3Reducer };
export default formReducer;
