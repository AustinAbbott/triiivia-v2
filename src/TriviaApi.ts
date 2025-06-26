import { API_BASE_URL, QuestionResponse } from "./constants";
import Utils from "./utils/utils";

export default class TriviaApi {
  public static getCategories = async () => {
    const result = await fetch(`${API_BASE_URL}api_category.php`);
    const categoryObject = await result.json();
    return categoryObject.trivia_categories;
  };

  public static getQuestionCountForCategory = async (categoryId: number) => {
    const result = await fetch(
      `${API_BASE_URL}api_count.php?category=${categoryId}`,
    ).then((response) => response.json());
    return result;
  };

  public static getQuestions = async (requestUrl: string) => {
    const result: Response = await fetch(`${API_BASE_URL}${requestUrl}`);
    const questionResponseObject = await result.json();
    return questionResponseObject.results?.map(
      (questionObject: QuestionResponse) =>
        Utils.decodeQuestionResponse(questionObject),
    );
  };
}
