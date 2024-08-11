export const types = Object.freeze({
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
});

const initialState = {
  user: null,
  token: null,
};

export default initialState;
