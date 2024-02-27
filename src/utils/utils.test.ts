import { AvailableQuestionsResponse, DifficultyOptions } from "../constants";
import Utils from "./utils";

describe("Utils", () => {
  describe("generateDifficultyLevels", () => {
    let mockAvailableQuestionsResponse: AvailableQuestionsResponse;

    beforeEach(() => {
      mockAvailableQuestionsResponse = {
        category_id: 24,
        category_question_count: {
          total_question_count: 30,
          total_easy_question_count: 10,
          total_medium_question_count: 10,
          total_hard_question_count: 10,
        },
      } as AvailableQuestionsResponse;
    });

    test("returns an empty array by default", () => {
      expect(Utils.generateDifficultyLevels()).toStrictEqual([]);
    });

    test(`returns an array containing "Easy" if that's the only option`, () => {
      mockAvailableQuestionsResponse.category_question_count.total_hard_question_count = 0;
      mockAvailableQuestionsResponse.category_question_count.total_medium_question_count = 0;

      expect(
        Utils.generateDifficultyLevels(mockAvailableQuestionsResponse)
      ).toStrictEqual([DifficultyOptions.EASY]);
    });

    test(`returns an array containing "Medium" if that's the only option`, () => {
      mockAvailableQuestionsResponse.category_question_count.total_hard_question_count = 0;
      mockAvailableQuestionsResponse.category_question_count.total_easy_question_count = 0;

      expect(
        Utils.generateDifficultyLevels(mockAvailableQuestionsResponse)
      ).toStrictEqual([DifficultyOptions.MEDIUM]);
    });

    test(`returns an array containing "Hard" if that's the only option`, () => {
      mockAvailableQuestionsResponse.category_question_count.total_easy_question_count = 0;
      mockAvailableQuestionsResponse.category_question_count.total_medium_question_count = 0;

      expect(
        Utils.generateDifficultyLevels(mockAvailableQuestionsResponse)
      ).toStrictEqual([DifficultyOptions.HARD]);
    });

    test(`returns an array with all available options`, () => {
      expect(
        Utils.generateDifficultyLevels(mockAvailableQuestionsResponse)
      ).toStrictEqual([
        DifficultyOptions.EASY,
        DifficultyOptions.MEDIUM,
        DifficultyOptions.HARD,
      ]);
    });
  });
});
