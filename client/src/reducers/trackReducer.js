import {GET_ERRORS,GET_TRACKS} from '../actions/types';

const initialState = {
  isAuthenticated: false,
  track: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
   case GET_TRACKS:
   return{
     ...state, 
     tracks: action.payload, 
     loading: false
   }
    default:
      return state;
  }
}
