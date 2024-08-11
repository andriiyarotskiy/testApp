import initialState, {types} from '../states/location';

export default function (state = initialState, action) {
  switch (action.type) {
    case types.CREATE_LOCATION: {
      return {
        ...initialState,
        locations: [action.payload, ...state.locations],
      };
    }
    case types.DELETE_LOCATION: {
      return {
        ...initialState,
        locations: state.locations.filter(l => action.id !== l.id),
      };
    }
    case types.SET_LOCATIONS: {
      return {
        ...initialState,
        locations: action.payload,
      };
    }
    default:
      return state;
  }
}
