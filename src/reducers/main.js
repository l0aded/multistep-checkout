import { combineReducers } from 'redux';
import formReducer from './form.js'
import appReducer from './app.js'


let rootReducer = combineReducers({
  appReducer,
  formReducer
});
//TODO: define the root reducer for this app

//HINT: you'll need to combine the other two reducers in this
//  app into a single reducer using the 'combineReducers' method
//  listed above.
export default rootReducer;
