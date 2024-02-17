import { API_BASE_URL } from "./constants";

export default class TriviaApi {
  public static getCategories = async () => {
    const result = await fetch(API_BASE_URL + "api_category.php");
    const categoryObject = await result.json();
    return categoryObject.trivia_categories;
  };
}
