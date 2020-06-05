import { Method } from 'axios';

const API = {
  questions: '/public/data/Q&A.json',
};

export default API;

export interface EndPoint {
  method: Method;
  url: string;
}

export type BackendEndpointNames = 'allQuestions';

export type BackendEndpoints = {
  [key in BackendEndpointNames]: EndPoint;
};

export type BackendEndpointsFunctions = {
  [key in BackendEndpointNames]: Function;
};

export const BACKEND_ENDPOINTS: BackendEndpoints = {
  allQuestions: { method: 'get', url: 'allQuestions' },
};
