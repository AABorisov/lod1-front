import { Method } from 'axios';

const API = {
  questions: '/public/data/Q&A.json',
};

export default API;

export interface EndPoint {
  method: Method;
  url: string;
}

export type BackendEndpointNames =
  | 'createToken'
  | 'updateToken'
  | 'refreshToken'
  | 'verifyToken'
  | 'allQuestions';

export type BackendEndpoints = {
  [key in BackendEndpointNames]: EndPoint;
};

export type BackendEndpointsFunctions = {
  [key in BackendEndpointNames]: Function;
};

export const BACKEND_ENDPOINTS: BackendEndpoints = {
  createToken: { method: 'post', url: 'api/v1/create_token/' },
  updateToken: { method: 'put', url: 'api/v1/update_token/{token}/' },
  refreshToken: { method: 'post', url: 'api/v1/refresh_token/' },
  verifyToken: { method: 'post', url: 'api/v1/verify_token/' },
  allQuestions: { method: 'get', url: 'allQuestions' },
};
