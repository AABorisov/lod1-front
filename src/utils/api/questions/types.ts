export interface QuestionsResponseData {
  ru: Array<Question>;
  en: Array<Question>;
}

export type Questions = Array<Question>;

export interface Question {
  options: Array<Answer>;
  questionId: QuestionId;
  questionType: string;
  text: string;
  title: string;
  triggers?: Triggers;
  trigger?: QuestionId;
  image?: string;
}

export interface Answer {
  label: string;
  value: string;
  nextQuestionId?: QuestionId;
  options?: Array<Answer>;
}

export interface Triggers {
  checked: QuestionId;
  unchecked: QuestionId;
}

export type QuestionId = number | string;

export enum QuestionType {
  quizType = 'quiz',
  checkboxesType = 'checkboxes',
  checkboxTreeType = 'checkboxTree',
  socialType = 'social',
  askType = 'ask',
  finalType = 'last',
}
