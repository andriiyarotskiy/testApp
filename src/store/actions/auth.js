import {types} from '../states/auth';
import {navigate} from '../../services/rootNavigation';
import {resetStorage, setAuthToStorage} from '../../services/authAsyncStorage';
import SCREENS from "../../constants/screens";

const authActions = {
  login: payload => async dispatch => {
    dispatch({type: types.LOGIN, payload});
    await void setAuthToStorage(payload.token, payload.user);
    await navigate(SCREENS.LOCATIONS);
  },
  logOut: () => async dispatch => {
    dispatch({type: types.LOGOUT});
    await void resetStorage();
    await navigate(SCREENS.SIGN_IN);
  },
};

export default authActions;
