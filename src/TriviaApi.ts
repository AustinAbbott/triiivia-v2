export default class TriviaApi {
  public static getCategories = async () => {
    const result = await fetch("https://opentdb.com/api_category.php");
    const categoryObject = await result.json();
    return categoryObject.trivia_categories;
  };
}
