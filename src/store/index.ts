import { AnyAction, applyMiddleware, createStore, Dispatch, Store } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import rootReducer from './rootReducer';
import { setAuth } from './auth/actions';
import { fetchOpentok } from './opentokConfig/actions';

export type AppState = ReturnType<typeof rootReducer>;

const middlewares = [thunk as ThunkMiddleware<AppState, AnyAction>];

const configureStore = (initialState = {}): Store<AppState> => {
  const store = createStore(rootReducer, initialState, applyMiddleware(...middlewares));

  /* Load async data */
  async function fetchData(dispatch: Dispatch): Promise<void> {
    if (!localStorage.getItem('tAccess')) {
      setAuth(localStorage.getItem('tAccess'));
    } else {
      setAuth(null);
    }
    dispatch(fetchOpentok.apply(this));
  }
  fetchData(store.dispatch);
  return store;
};

export default configureStore;
