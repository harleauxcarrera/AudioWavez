import { combineReducers} from 'redux';
import trackReducer from './trackReducer';
import errorReducer from './errorReducer';

export default combineReducers({
  trax: trackReducer,
  errors: errorReducer
})