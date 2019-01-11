import {GET_ERRORS} from '../actions/types';

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
   case GET_ERRORS:
    return action.payload;//payload is coming from the trackUpAction
    default:
      return state;
  }
}
