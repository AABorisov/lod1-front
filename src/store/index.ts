import { AnyAction, applyMiddleware, createStore, Dispatch, Store } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import rootReducer from './rootReducer';
import { fetchQuestions } from './questions/actions';

export type AppState = ReturnType<typeof rootReducer>;

const middlewares = [thunk as ThunkMiddleware<AppState, AnyAction>];

const configureStore = (initialState = {}): Store<AppState> => {
  const store = createStore(rootReducer, initialState, applyMiddleware(...middlewares));

  /* Load async data */
  function fetchData(dispatch: Dispatch): void {
    dispatch(fetchQuestions.apply(this));
  }
  fetchData(store.dispatch);
  return store;
};

export default configureStore;
