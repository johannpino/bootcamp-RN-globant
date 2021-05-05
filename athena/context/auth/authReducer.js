import { USER_SIGNIN, USER_SIGNOUT } from '../../types';
export default (state, action) => {
  switch (action.type) {
    case USER_SIGNIN:
      return {
        ...state,
        loggedin: true,
      };
    case USER_SIGNOUT:
      return {
        ...state,
        loggedin: false,
      };
    default:
      return state;
  }
};
