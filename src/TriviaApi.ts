import { API_BASE_URL, QuestionResponse } from "./constants";
import Utils from "./utils/utils";

export default class TriviaApi {
  public static getCategories = async () => {
    const result = await fetch(`${API_BASE_URL}api_category.php`).then(
      (response) => response.json()
    );

    return result.trivia_categories;
  };

  public static getQuestionCountForCategory = async (categoryId: number) => {
    const result = await fetch(
      `${API_BASE_URL}api_count.php?category=${categoryId}`
    ).then((response) => response.json());

    return result;
  };

  public static getQuestions = async (requestUrl: string) => {
    const result = await fetch(`${API_BASE_URL}${requestUrl}`).then(
      (response) => response.json()
    );

    return result.results?.map((questionObject: QuestionResponse) =>
      Utils.decodeQuestionResponse(questionObject)
    );
  };
}
