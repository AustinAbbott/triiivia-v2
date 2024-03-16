import {
  AvailableQuestionsResponse,
  Category,
  DifficultyOptions,
  Modes,
  QuestionResponse,
} from "../constants";

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

  public static categoryNameSort = (a: Category, b: Category): number => {
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1;
    } else if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return -1;
    } else {
      return 0;
    }
  };

  public static getSelectedModeParam = (selectedMode: string): string => {
    switch (selectedMode) {
      case Modes.MULTIPLE_CHOICE:
        return "multiple";
      case Modes.TRUE_FALSE:
        return "boolean";
      default:
        return "";
    }
  };

  public static generateNumberOfQuestions = (
    availableQuestions?: AvailableQuestionsResponse,
    selectedDifficulty?: string
  ): string[] => {
    let questionsCountForDifficulty: number = 0;

    switch (selectedDifficulty) {
      case DifficultyOptions.EASY:
        const easyQuestionCount =
          availableQuestions?.category_question_count.total_easy_question_count;

        if (easyQuestionCount) questionsCountForDifficulty = easyQuestionCount;
        break;
      case DifficultyOptions.MEDIUM:
        const mediumQuestionCount =
          availableQuestions?.category_question_count
            .total_medium_question_count;

        if (mediumQuestionCount)
          questionsCountForDifficulty = mediumQuestionCount;
        break;
      case DifficultyOptions.HARD:
        const hardQuestionCount =
          availableQuestions?.category_question_count.total_hard_question_count;

        if (hardQuestionCount) questionsCountForDifficulty = hardQuestionCount;
        break;
      default:
        break;
    }

    const questionCountList: string[] = [];

    for (let i = 5; i <= questionsCountForDifficulty && i <= 30; i += 5) {
      questionCountList.push(`${i}`);
    }

    return questionCountList;
  };

  public static generateDifficultyLevels = (
    availableQuestions?: AvailableQuestionsResponse
  ): DifficultyOptions[] => {
    const options: DifficultyOptions[] = [];

    if (!availableQuestions) return options;

    if (
      availableQuestions.category_question_count.total_easy_question_count > 5
    ) {
      options.push(DifficultyOptions.EASY);
    }

    if (
      availableQuestions.category_question_count.total_medium_question_count > 5
    ) {
      options.push(DifficultyOptions.MEDIUM);
    }

    if (
      availableQuestions.category_question_count.total_hard_question_count > 5
    ) {
      options.push(DifficultyOptions.HARD);
    }

    return options;
  };

  // Source: https://stackoverflow.com/a/2450976/12815672
  public static shuffle = (arr: string[]) => {
    let currentIndex = arr.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex > 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [arr[currentIndex], arr[randomIndex]] = [
        arr[randomIndex],
        arr[currentIndex],
      ];
    }

    return arr;
  };
}
