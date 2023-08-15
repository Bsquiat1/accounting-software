// src/redux/reducers/index.js
import { combineReducers } from 'redux';
import counterReducer from './counterReducer'; // Import your reducer(s)

const rootReducer = combineReducers({
  counter: counterReducer,
  // Add more reducers here
});

export default rootReducer;
