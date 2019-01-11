import { TEST_DISPATCH } from "../actions/types";

const initialState = {
  isAuthenticated: false,
  track: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TEST_DISPATCH:
      return {
        ...state,
        track: action.payload
      };
    default:
      return state;
  }
}
