import { QuestionResponse } from "./constants";

export default class Utils {
  public static decodeQuestionResponse = (questionObject: QuestionResponse) => {
    return {
      type: atob(questionObject.type),
      difficulty: atob(questionObject.difficulty),
      category: atob(questionObject.category),
      question: atob(questionObject.question),
      correct_answer: atob(questionObject.correct_answer),
      incorrect_answers: questionObject.incorrect_answers.map(atob),
    };
  };
}
