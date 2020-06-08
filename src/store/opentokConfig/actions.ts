import {
  FETCH_OPENTOK_ERROR,
  FETCH_OPENTOK_PENDING,
  FETCH_OPENTOK_SUCCESS,
  FetchOpentokAction,
  FetchOpentokErrorAction,
  FetchOpentokPendingAction,
  FetchOpentokSuccessAction,
  OpenTokConfig,
  OpentokData,
  OpentokResponseData,
} from './types';
import Api from '../../utils/api/Api';
import { ThunkResult } from '../types';

export const fetchOpentokPending = (): FetchOpentokPendingAction => ({
  type: FETCH_OPENTOK_PENDING,
});

export const fetchOpentokSuccess = (opentok: OpentokData): FetchOpentokSuccessAction => ({
  type: FETCH_OPENTOK_SUCCESS,
  payload: opentok,
});

export const fetchOpentokError = (): FetchOpentokErrorAction => ({
  type: FETCH_OPENTOK_ERROR,
});

const urls = {
  common: 'https://dedman.herokuapp.com',
  private: 'https://manded.herokuapp.com',
  networking: 'https://devlabsnetworking.herokuapp.com',
};

const fetchConfig = async (url: string) => {
  return fetch(`${url}/session`)
    .then(function(res) {
      return res.json();
    })
    .then(function(res) {
      return {
        apiKey: res.apiKey,
        sessionId: res.sessionId,
        token: res.token,
      };
    });
};

export const fetchOpentok = (): ThunkResult<Promise<void>, FetchOpentokAction> => async (
  dispatch
): Promise<void> => {
  dispatch(fetchOpentokPending());
  try {
    const data: OpentokData = {};
    for (const key in urls) {
      // @ts-ignore
      const opentok: OpenTokConfig = await fetchConfig(urls[key]);
      data[key] = opentok;
    }
    // @ts-ignore
    dispatch(fetchOpentokSuccess(data));
  } catch (error) {
    dispatch(fetchOpentokError());
  }
};
