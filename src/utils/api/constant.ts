import { Method } from 'axios';

const API = {};

export default API;

export interface EndPoint {
  method: Method;
  url: string;
}

export type BackendEndpointNames =
  | 'auth'
  | 'createToken'
  | 'updateToken'
  | 'refreshToken'
  | 'verifyToken';

export type BackendEndpoints = {
  [key in BackendEndpointNames]: EndPoint;
};

export type BackendEndpointsFunctions = {
  [key in BackendEndpointNames]: Function;
};

export const BACKEND_ENDPOINTS: BackendEndpoints = {
  auth: { method: 'post', url: 'auth' },
  createToken: { method: 'post', url: 'api/v1/create_token/' },
  updateToken: { method: 'put', url: 'api/v1/update_token/{token}/' },
  refreshToken: { method: 'post', url: 'api/v1/refresh_token/' },
  verifyToken: { method: 'post', url: 'api/v1/verify_token/' },
};
