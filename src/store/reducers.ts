import { combineReducers } from 'redux';
import reduceReducers from 'reduce-reducers';
import reducer from '../utils/store/reducer';
import asyncReducer from '../utils/store/reducer';

export default combineReducers({
  domain: reduceReducers(reducer, asyncReducer)
});
