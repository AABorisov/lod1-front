import { AnyAction, applyMiddleware, createStore, Dispatch, Store } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import rootReducer from './rootReducer';
import {setAuth} from "./auth/actions";

export type AppState = ReturnType<typeof rootReducer>;

const middlewares = [thunk as ThunkMiddleware<AppState, AnyAction>];

const configureStore = (initialState = {}): Store<AppState> => {
  const store = createStore(rootReducer, initialState, applyMiddleware(...middlewares));

  /* Load async data */
  function fetchData(dispatch: Dispatch): void {
    if (!localStorage.getItem('tAccess')) {
      setAuth(localStorage.getItem('tAccess'))
    } else {
      setAuth(null)
    }
  }
  fetchData(store.dispatch);
  return store;
};

export default configureStore;
