import { SetLangAction, SET_LANG, LangEnum, LangState } from './types';

const initialState: LangState = LangEnum.en;

export function langReducer(state: LangState = initialState, action: SetLangAction): LangState {
  switch (action.type) {
    case SET_LANG:
      return action.payload;
    default:
      return state;
  }
}
