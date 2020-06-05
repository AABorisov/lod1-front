import {
  FETCH_QUESTIONS_ERROR,
  FETCH_QUESTIONS_PENDING,
  FETCH_QUESTIONS_SUCCESS,
  QuestionsAction,
  QuestionsState,
} from './types';

const initialState: QuestionsState = {
  pending: false,
  error: false,
  questionSteps: {
    ru: [],
    en: [],
  },
};

export default function questionsReducer(
  state: QuestionsState = initialState,
  action: QuestionsAction
): QuestionsState {
  switch (action.type) {
    case FETCH_QUESTIONS_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_QUESTIONS_SUCCESS:
      return {
        ...state,
        questionSteps: {
          ru: [...state.questionSteps.ru, ...action.payload.ru],
          en: [...state.questionSteps.en, ...action.payload.en],
        },
        pending: false,
      };
    case FETCH_QUESTIONS_ERROR:
      return {
        ...state,
        pending: false,
        error: true,
      };
    default:
      return state;
  }
}
