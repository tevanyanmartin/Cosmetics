import { SET_LOGGED_IN_USER } from "../actions/auth";
import initialState from "./initialState";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGGED_IN_USER : {
      return {
        ...state,
        loggedInUser: action.payload
      }
    }
    default:
      return state;
  }
};

export default reducer;
