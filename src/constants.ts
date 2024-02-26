export const API_BASE_URL = "https://opentdb.com/";

export type Category = {
  name: string;
  id: number;
};

export enum BooleanAnswers {
  TRUE = "True",
  FALSE = "False",
}

export enum Modes {
  TRUE_FALSE = "True / False",
  MULTIPLE_CHOICE = "Multiple Choice",
}

export enum DifficultyOptions {
  EASY = "Easy",
  MEDIUM = "Medium",
  HARD = "Hard",
}

enum DifficultyResponse {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export enum TypeResponse {
  TRUE_FALSE = "boolean",
  MULTIPLE_CHOICE = "multiple",
}

export type QuestionResponse = {
  category: string;
  correct_answer: string;
  difficulty: DifficultyResponse;
  incorrect_answers: string[];
  question: string;
  type: TypeResponse;
};

export type AvailableQuestionsResponse = {
  category_id: number;
  category_question_count: {
    total_question_count: number;
    total_easy_question_count: number;
    total_medium_question_count: number;
    total_hard_question_count: number;
  };
};
