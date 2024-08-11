import {types} from '../states/location';

const locationActions = {
  create: payload => dispatch => {
    dispatch({type: types.CREATE_LOCATION, payload});
  },
  delete: id => dispatch => {
    dispatch({type: types.DELETE_LOCATION, id});
  },
  setLocations: payload => dispatch => {
    dispatch({type: types.SET_LOCATIONS, payload});
  },
};

export default locationActions;
