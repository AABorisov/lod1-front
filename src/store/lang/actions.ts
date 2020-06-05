import { LangEnum, SET_LANG, SetLangAction } from './types';

export const setLang = (lang: LangEnum): SetLangAction => ({
  type: SET_LANG,
  payload: lang,
});
