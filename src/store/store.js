import { createStore, applyMiddleware } from 'redux';
// import rootReducer from './../reducers/main.js';
import rootReducer from './../reducers/main.js';

// TODO:  Create your redux store, apply thunk as a middleware, and export it!

const store = createStore(rootReducer);

export default store;
