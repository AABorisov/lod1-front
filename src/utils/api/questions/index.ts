import get from '../client';
import API from '../constant';
import { QuestionsResponseData } from './types';

export async function getQuestions(): Promise<QuestionsResponseData> {
  const url: string = API.questions;

  const response = await get(url);

  return response;
}
