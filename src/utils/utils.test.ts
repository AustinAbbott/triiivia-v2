import Utils from "./utils";

describe("Utils", () => {
  describe("generateDifficultyLevels", () => {
    test("it returns no levels if available questions === null", () => {
      expect(Utils.generateDifficultyLevels()).toStrictEqual([]);
    });
  });
});
