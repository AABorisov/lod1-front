import { combineReducers } from 'redux';
import {videoplayerReducer} from './videoplayer/reducer';
import authReducer from "./auth/reducer";
import {langReducer} from "./lang/reducer";
import opentokReducer from "./opentokConfig/reducer";

export default combineReducers({
  lang: langReducer,
  auth: authReducer,
  videoplayer: videoplayerReducer,
  opentokConfig: opentokReducer
});
