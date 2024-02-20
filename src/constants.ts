export const API_BASE_URL = "https://opentdb.com/";

export type Category = {
  name: string;
  id: number;
};

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

enum TypeResponse {
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
