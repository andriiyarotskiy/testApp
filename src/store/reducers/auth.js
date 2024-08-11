import initialState, {types} from '../states/auth';

export default function (state = initialState, action) {
  switch (action.type) {
    case types.LOGIN: {
      const {token, user} = action.payload;
      return {
        ...initialState,
        token: token,
        user: user,
      };
    }
    case types.LOGOUT: {
      return initialState;
    }
    default:
      return state;
  }
}
