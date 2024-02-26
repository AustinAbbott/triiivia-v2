import { Category, QuestionResponse } from "./constants";

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

  public static categoryNameSort = (a: Category, b: Category) => {
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1;
    } else if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return -1;
    } else {
      return 0;
    }
  };
}
