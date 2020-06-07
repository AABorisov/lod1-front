import {
  FETCH_OPENTOK_ERROR,
  FETCH_OPENTOK_PENDING,
  FETCH_OPENTOK_SUCCESS,
  OpentokAction,
  OpentokState,
} from './types';

const initialState: OpentokState = {
  data: {},
  pending: false,
  error: false,
};

export default function opentokReducer(
  state: OpentokState = initialState,
  action: OpentokAction
): OpentokState {
  switch (action.type) {
    case FETCH_OPENTOK_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_OPENTOK_SUCCESS:
      return {
        ...state,
        data: action.payload,
        pending: false,
      };
    case FETCH_OPENTOK_ERROR:
      return {
        ...state,
        pending: false,
        error: true,
      };
    default:
      return state;
  }
}
