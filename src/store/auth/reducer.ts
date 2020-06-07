import {
  FETCH_AUTH_ERROR,
  FETCH_AUTH_PENDING,
  FETCH_AUTH_SUCCESS,
  SET_AUTH,
  AuthAction,
  AuthState,
} from './types';

const initialState: AuthState = {
  pending: false,
  error: false,
  auth: null,
};

export default function authReducer(
  state: AuthState = initialState,
  action: AuthAction
): AuthState {
  switch (action.type) {
    case FETCH_AUTH_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_AUTH_SUCCESS:
      return {
        ...state,
        auth: action.payload,
        pending: false,
      };
    case SET_AUTH:
      return {
        ...state,
        auth: action.payload,
      };
    case FETCH_AUTH_ERROR:
      return {
        ...state,
        pending: false,
        error: true,
      };
    default:
      return state;
  }
}
