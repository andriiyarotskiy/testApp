import {applyMiddleware, combineReducers, createStore} from 'redux';
import {thunk} from 'redux-thunk';
import authReducer from './reducers/auth';
import locationReducer from './reducers/location';

const rootReducer = combineReducers({
  auth: authReducer,
  location: locationReducer,
});

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};

const store = configureStore();

export default store;
