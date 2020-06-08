import {
  AuthData,
  FETCH_AUTH_ERROR,
  FETCH_AUTH_PENDING,
  FETCH_AUTH_SUCCESS,
  FetchAuthAction,
  FetchAuthErrorAction,
  FetchAuthPendingAction,
  FetchAuthSuccessAction,
  SET_AUTH,
  SetAuthAction,
} from './types';
import { ThunkResult } from '../types';
import Api from '../../utils/api/Api';

const saveToken = (auth: AuthData) => {
  if (auth) {
    localStorage.setItem('tAccess', auth);
  } else {
    localStorage.removeItem('tAccess');
  }
};

export const fetchAuthPending = (): FetchAuthPendingAction => ({
  type: FETCH_AUTH_PENDING,
});

export const fetchAuthSuccess = (auth: AuthData): FetchAuthSuccessAction => ({
  type: FETCH_AUTH_SUCCESS,
  payload: auth,
});

export const setAuth = (auth: AuthData): SetAuthAction => {
  saveToken(auth);
  return {
    type: SET_AUTH,
    payload: auth,
  };
};

export const fetchAuthError = (): FetchAuthErrorAction => ({
  type: FETCH_AUTH_ERROR,
});

export const registration = (): ThunkResult<Promise<void>, FetchAuthAction> => async (
  dispatch
): Promise<void> => {
  dispatch(fetchAuthPending());
  try {
    const authResponseData = await Api.auth();
    saveToken(authResponseData);
    dispatch(fetchAuthSuccess(authResponseData));
  } catch (error) {
    dispatch(fetchAuthError());
  }
};
