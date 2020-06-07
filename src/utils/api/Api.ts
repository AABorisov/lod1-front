import axios, { AxiosInstance } from 'axios';
import {
  BACKEND_ENDPOINTS,
  BackendEndpointNames,
  BackendEndpoints,
  BackendEndpointsFunctions,
  EndPoint,
} from './constant';

const httpForbidden = 403;
const httpUnauthorized = 401;
const httpBadRequest = 400;

interface OptionsHeaders {
  Accept: string;
  'Content-Type': string;
  Authorization?: string;
  'Access-Control-Allow-Origin'?: string;
  'Access-Control-Allow-Methods'?: string;
}

interface ApiClientClassOptions {
  headers?: OptionsHeaders;
  client?: AxiosInstance;
}

/**
 * Объект-обертка над клиентом.
 * Реализация REST
 */
class ApiClientClass {
  private readonly defaultHeaders: OptionsHeaders;

  client: AxiosInstance;

  constructor(options: ApiClientClassOptions = {}) {
    this.defaultHeaders = options.headers || {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      // Authorization: 'Basic YWRtaW46cGFzc3dvcmQ=',
    };
    // Создание экзепляра клиента
    this.client =
      options.client ||
      axios.create({
        baseURL: process.env.API_URL ? process.env.API_URL : '',
        headers: this.defaultHeaders,
      });

    /**
     * Подготовка запроса
     */
    this.client.interceptors.request.use(
      config => {
        if (!localStorage.getItem('tAccess')) {
          return config;
        }
        const newHeaders = {
          ...this.defaultHeaders,
          // Authorization: `Basic ${localStorage.getItem('tAccess')}`,
        };
        return {
          ...config,
          headers: newHeaders,
        };
      },
      e => Promise.reject(e)
    );

    this.client.interceptors.response.use(
      r => r,
      async error => {
        // if (error.response && error.response.status === 403 /*httpForbidden*/ && !error.config.retry) {
        //   this.removeTokens();
        //   throw 'USER_UNAUTHORIZED';
        // }
        // if (error.response && error.response.status === 401 /*httpUnauthorized*/ && !error.config.retry) {
        //   try {
        //     const {data} = await this.createRefreshRequest();
        //     this.setTokens({
        //       tAccess: data.access,
        //       tRefresh: data.token
        //     });
        //     const newRequest = {
        //       ...error.config,
        //       retry: true
        //     };
        //     return this.client(newRequest);
        //   } catch (err) {
        //     console.warn('');
        //     throw err
        //   } finally {
        //     this.refreshRequest = null;
        //   }
        // }
        throw error;
      }
    );
  }

  urlFormat(url: string, args: object = {}): string {
    return this ? url : args.toString();
  }
  //
  // setTokens({ tAccess = '', tRefresh = '' }) {
  //     localStorage.setItem('tAccess', tAccess);
  //     localStorage.setItem('tRefresh', tRefresh);
  //     window.dispatchEvent(new StorageEvent('storage', { key: 'tAccess' }));
  //     window.dispatchEvent(new StorageEvent('storage', { key: 'tRefresh' }));
  // }
  //
  // removeTokens() {
  //     localStorage.removeItem('tAccess');
  //     localStorage.removeItem('tRefresh');
  //     window.dispatchEvent(new StorageEvent('storage', { key: 'tAccess' }));
  //     window.dispatchEvent(new StorageEvent('storage', { key: 'tRefresh' }));
  // }
  //
  // async loginByToken({ urlArguments }: { urlArguments: string }) {
  //   try {
  //     const result = await this.client({
  //       method: BACKEND_ENDPOINTS.updateToken.method,
  //       url: this.urlFormat(BACKEND_ENDPOINTS.updateToken.url, { urlArguments }),
  //     });
  //     const { data } = result;
  //     this.setTokens({
  //       tAccess: data.jwt_token.access,
  //       tRefresh: data.jwt_token.refresh,
  //     });
  //     return true;
  //   } catch (e) {
  //     throw new Error(e);
  //   }
  // }
  //
  // async logout () {
  //   try {
  //     const result = await this.client({
  //       ...{
  //         method: BACKEND_ENDPOINTS.updateToken.method,
  //         url: `${BACKEND_ENDPOINTS.updateToken.url}${token}/`
  //       }
  //     });
  //   } catch (error) {
  //     if (error !== 'USER_UNAUTHORIZED') {
  //       const respStatus = error.response.status;
  //       if (![httpForbidden, httpUnauthorized].includes(respStatus)) {
  //         throw new Error(error.response);
  //       }
  //     }
  //   } finally {
  //     this.removeTokens();
  //   }
  // }
}

/**
 * Прокси объект для динамического вызова функции апи.
 */
const Api: ApiClientClass & BackendEndpointsFunctions = new Proxy(new ApiClientClass(), {
  get(target, name) {
    if (Reflect.get(BACKEND_ENDPOINTS, name) !== undefined) {
      return ({
        params = {},
        data = {},
        args = {},
      }: { params?: object; data?: object; args?: object } = {}) => {
        const endPoint: EndPoint = Reflect.get(BACKEND_ENDPOINTS, name);
        return target
          .client({
            method: endPoint.method,
            url: target.urlFormat(endPoint.url, args),
            data,
            params,
          })
          .then(serverResponse => serverResponse.data)
          .catch(error => {
            // if (error.response.status === httpBadRequest) {
            //   new BadDataError('Bad request error');
            // }
            throw new Error('Server response error');
          });
      };
    }
    return Reflect.get(target, name);
  },
}) as ApiClientClass & BackendEndpointsFunctions;

export default Api;
