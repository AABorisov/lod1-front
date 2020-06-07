import { combineReducers } from 'redux';
import { langReducer } from './lang/reducer';
import authReducer from "./auth/reducer";

export default combineReducers({
  lang: langReducer,
  auth: authReducer,
});
