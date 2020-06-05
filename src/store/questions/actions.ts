import {
  AllQuestionSteps,
  FETCH_QUESTIONS_ERROR,
  FETCH_QUESTIONS_PENDING,
  FETCH_QUESTIONS_SUCCESS,
  FetchQuestionsAction,
  FetchQuestionsErrorAction,
  FetchQuestionsPendingAction,
  FetchQuestionsSuccessAction,
  QuestionStep,
  QuestionSteps,
} from './types';
import { ThunkResult } from '../types';
import { Questions } from '../../utils/api/questions/types';
import Api from '../../utils/api/Api';
import { LangEnum } from '../lang/types';

export const fetchQuestionsPending = (): FetchQuestionsPendingAction => ({
  type: FETCH_QUESTIONS_PENDING,
});

export const fetchQuestionsSuccess = (
  questionSteps: AllQuestionSteps
): FetchQuestionsSuccessAction => ({
  type: FETCH_QUESTIONS_SUCCESS,
  payload: questionSteps,
});

export const fetchQuestionsError = (): FetchQuestionsErrorAction => ({
  type: FETCH_QUESTIONS_ERROR,
});

const convertResponseToQuestionSteps = (questions: Questions, lang: LangEnum): QuestionSteps => {
  const isRuLang = LangEnum.ru === lang;
  return questions.reduce((acc: QuestionSteps, question) => {
    const optionTriggerId = `${question.questionId}_options`;
    const isEnd: boolean = question.questionType === 'last';
    const step1: QuestionStep = {
      id: question.questionId.toString(),
      message: question.text,
    };

    if (!!question.image && question.questionType !== 'image') {
      const messageTrigger = `${question.questionId}_message`;
      const imageStep = {
        id: question.questionId.toString(),
        trigger: messageTrigger,
        metadata: {
          image: question.image,
          type: 'image',
        },
      };
      step1.id = messageTrigger;
      acc.push(imageStep);
    }

    if (isEnd) {
      // step1.end = true;
      // acc.push(step1);
      // return acc;
      question.questionType = 'quiz';
      question.options = [
        {
          label: isRuLang ? 'Пройти тест ещё раз?' : 'Do the test again?',
          nextQuestionId: '1',
          value: '0',
        },
        { label: isRuLang ? 'Поболтаем?' : "Let's talk!", nextQuestionId: 'ask', value: '0' },
      ];
    }
    if (question.questionType === 'message') {
      step1.trigger = question.trigger;
      acc.push(step1);
      return acc;
    }
    if (question.questionType === 'image') {
      step1.trigger = question.trigger;
      step1.metadata.image = question.image;
      step1.metadata.type = question.questionType;
      acc.push(step1);
      return acc;
    }
    step1.trigger = optionTriggerId;

    acc.push(step1);

    const options = question.options.map(answer => ({
      value: answer.label,
      value2: answer.value,
      label: answer.label,
      trigger: answer.nextQuestionId,
    }));

    const step2: QuestionStep = {
      id: optionTriggerId,
      metadata: {
        type: question.questionType,
        triggers: question.triggers,
      },
    };

    switch (question.questionType) {
      case 'ask':
        acc.push({
          id: optionTriggerId,
          user: true,
          trigger: ({ value }: { value: string }) => {
            if (value.indexOf('плохо') > 1 || value.indexOf('terribly') > 1) {
              return 'sad';
            }
            if (value.indexOf('солнце') > 1 || value.indexOf('happy') > 1) {
              return 'happy';
            }
            return 'answer';
          },
        });
        step2.id = 'answer';
        step2.trigger = step1.id;
        break;

      case 'last':
      case 'quiz':
        step2.options = options;
        break;
      default:
    }
    step2.metadata.options = options;
    acc.push(step2);
    return acc;
  }, []);
};

export const fetchQuestions = (): ThunkResult<Promise<void>, FetchQuestionsAction> => async (
  dispatch
): Promise<void> => {
  dispatch(fetchQuestionsPending());
  try {
    const questionsResponseData = await Api.allQuestions();
    const questionsRu = questionsResponseData.ru;
    const questionsEn = questionsResponseData.en;
    const questionStepsRu = convertResponseToQuestionSteps(questionsRu, LangEnum.ru);
    const questionStepsEn = convertResponseToQuestionSteps(questionsEn, LangEnum.en);
    dispatch(
      fetchQuestionsSuccess({
        ru: questionStepsRu,
        en: questionStepsEn,
      })
    );
  } catch (error) {
    dispatch(fetchQuestionsError());
  }
};
