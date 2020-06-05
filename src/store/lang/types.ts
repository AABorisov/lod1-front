export enum LangEnum {
  'en',
  'ru',
}

export type LangState = LangEnum;

export const SET_LANG = 'SET_LANG';

export interface SetLangAction {
  type: typeof SET_LANG;
  payload: LangEnum;
}
