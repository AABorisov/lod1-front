import { combineReducers } from 'redux';
import questionsReducer from './questions/reducer';
import { langReducer } from './lang/reducer';

export default combineReducers({
  questions: questionsReducer,
  lang: langReducer,
});
