import { API_BASE_URL, QuestionResponse } from "./constants";
import Utils from "./utils";

export default class TriviaApi {
  public static getCategories = async () => {
    const result = await fetch(API_BASE_URL + "api_category.php");
    const categoryObject = await result.json();
    return categoryObject.trivia_categories;
  };

  public static getQuestions = async (requestUrl: string) => {
    const result: Response = await fetch(requestUrl);
    const questionResponseObject = await result.json();
    return questionResponseObject.results.map(
      (questionObject: QuestionResponse) =>
        Utils.decodeQuestionResponse(questionObject)
    );
  };
}
