import {combineReducer, combineReducers} from 'redux';
import trackReducer from './trackReducer';

export default combineReducers({
  trax: trackReducer
})