import { FC, useState } from "react";
import { BooleanAnswers, QuestionResponse } from "../../constants";
import { SelectedChoices } from "../../shared-types";
import { AccessScoreContext } from "../../views/Game";

type TrueOrFalseCardProps = {
  questionData: QuestionResponse;
  incrementIndex: () => void;
};

const TrueOrFalseCard: FC<TrueOrFalseCardProps> = (props) => {
  const [selectedChoices, setSelectedChoices] = useState<SelectedChoices>({});
  const { state, update } = AccessScoreContext();
  const correctAnswer = props.questionData.correct_answer;

  const checkAnswer = (answer: BooleanAnswers) => {
    const correctAnswerOnFirstTry =
      !Object.keys(selectedChoices).length && answer === correctAnswer;

    if (correctAnswerOnFirstTry) {
      update({ score: state?.score + 1 });
    }

    setSelectedChoices({ ...selectedChoices, [answer]: true });
  };

  const handleNextClick = () => {
    props.incrementIndex();
  };

  const getChoiceButtonClass = (choice: BooleanAnswers) => {
    if (!selectedChoices[choice]) return "choice-button";

    if (choice === correctAnswer) {
      return "choice-button--correct";
    } else if (choice !== correctAnswer) {
      return "choice-button--incorrect";
    } else {
      return "choice-button";
    }
  };

  return (
    <div data-testid="TrueOrFalseCard">
      <div>
        <div className="question-container">
          <div>True or False?</div>
          <div>{props.questionData.question}</div>
        </div>
        <div className="choice-container">
          <button
            className={getChoiceButtonClass(BooleanAnswers.TRUE)}
            onClick={() => checkAnswer(BooleanAnswers.TRUE)}
            disabled={
              selectedChoices[BooleanAnswers.TRUE] ||
              selectedChoices[correctAnswer]
            }
          >
            True
          </button>
          <button
            className={getChoiceButtonClass(BooleanAnswers.FALSE)}
            onClick={() => checkAnswer(BooleanAnswers.FALSE)}
            disabled={
              selectedChoices[BooleanAnswers.FALSE] ||
              selectedChoices[correctAnswer]
            }
          >
            False
          </button>
        </div>
      </div>

      <button
        disabled={!selectedChoices[correctAnswer]}
        className="next-button"
        onClick={handleNextClick}
        type="button"
      >
        Next Question
      </button>
    </div>
  );
};

export default TrueOrFalseCard;
