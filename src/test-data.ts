import { AvailableQuestionsResponse } from "./constants";

export const MOCK_AVAILABLE_QUESTION_RESPONSE = {
  category_id: 24,
  category_question_count: {
    total_question_count: 30,
    total_easy_question_count: 10,
    total_medium_question_count: 10,
    total_hard_question_count: 10,
  },
} as AvailableQuestionsResponse;
