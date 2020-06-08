import { ThunkFetchState } from '../types';

export interface OpenTokConfig {
  apiKey: string;
  sessionId: string;
  token: string;
}

export type OpentokResponseData = OpenTokConfig;
export interface OpentokData {
  [key: string]: OpenTokConfig;
}

export interface OpentokState extends ThunkFetchState {
  data: OpentokData;
}

export const FETCH_OPENTOK_PENDING = 'FETCH_OPENTOK_PENDING';
export const FETCH_OPENTOK_SUCCESS = 'FETCH_OPENTOK_SUCCESS';
export const FETCH_OPENTOK_ERROR = 'FETCH_OPENTOK_ERROR';

export interface FetchOpentokPendingAction {
  type: typeof FETCH_OPENTOK_PENDING;
}

export interface FetchOpentokSuccessAction {
  type: typeof FETCH_OPENTOK_SUCCESS;
  payload: OpentokData;
}

export interface FetchOpentokErrorAction {
  type: typeof FETCH_OPENTOK_ERROR;
}

export type FetchOpentokAction =
  | FetchOpentokPendingAction
  | FetchOpentokSuccessAction
  | FetchOpentokErrorAction;

export type OpentokAction = FetchOpentokAction; // | OtherOpentokAction
