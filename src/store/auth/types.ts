import {ThunkFetchState} from "../types";


export interface AuthState extends ThunkFetchState {
  auth: AuthData;
}
export type AuthData = string | null;

export const FETCH_AUTH_PENDING = 'FETCH_AUTH_PENDING';
export const FETCH_AUTH_SUCCESS = 'FETCH_AUTH_SUCCESS';
export const FETCH_AUTH_ERROR = 'FETCH_AUTH_ERROR';
export const SET_AUTH = 'SET_AUTH';

export interface SetAuthAction {
  type: typeof SET_AUTH;
  payload: AuthData;
}
export interface FetchAuthPendingAction {
  type: typeof FETCH_AUTH_PENDING;
}

export interface FetchAuthSuccessAction {
  type: typeof FETCH_AUTH_SUCCESS;
  payload: AuthData;
}

export interface FetchAuthErrorAction {
  type: typeof FETCH_AUTH_ERROR;
}

export type FetchAuthAction =
  | SetAuthAction
  | FetchAuthPendingAction
  | FetchAuthSuccessAction
  | FetchAuthErrorAction;

export type AuthAction = FetchAuthAction; // | OtherAuthAction
