import { FC, useState } from "react";
import { BooleanAnswers, QuestionResponse } from "../../constants";
import { SelectedChoices } from "../../shared-types";
import { AccessScoreContext } from "../../views/Game";

type TrueOrFalseCardProps = {
  questionData: QuestionResponse;
  incrementIndex: () => void;
};

const TrueOrFalseCard: FC<TrueOrFalseCardProps> = (props) => {
  const [selectedAnswers, setSelectedAnswers] = useState<SelectedChoices>({});
  const { state, update } = AccessScoreContext();
  const correctAnswer = props.questionData.correct_answer;

  const checkAnswer = (answer: BooleanAnswers) => {
    const correctAnswerOnFirstTry =
      !Object.keys(selectedAnswers).length && answer === correctAnswer;

    if (correctAnswerOnFirstTry) {
      update({ score: state?.score + 1 });
    }

    setSelectedAnswers({ ...selectedAnswers, [answer]: true });
  };

  const handleNextClick = () => {
    props.incrementIndex();
  };

  const getTrueButtonClass = () => {
    if (!selectedAnswers[BooleanAnswers.TRUE]) return "choice-button";

    switch (correctAnswer) {
      case BooleanAnswers.TRUE:
        return "choice-button--correct";
      case BooleanAnswers.FALSE:
        return "choice-button--incorrect";
      default:
        return "choice-button";
    }
  };

  const getFalseButtonClass = () => {
    if (!selectedAnswers[BooleanAnswers.FALSE]) return "choice-button";

    switch (correctAnswer) {
      case BooleanAnswers.FALSE:
        return "choice-button--correct";
      case BooleanAnswers.TRUE:
        return "choice-button--incorrect";
      default:
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
            className={getTrueButtonClass()}
            onClick={() => checkAnswer(BooleanAnswers.TRUE)}
            disabled={
              selectedAnswers[BooleanAnswers.TRUE] ||
              selectedAnswers[correctAnswer]
            }
          >
            True
          </button>
          <button
            className={getFalseButtonClass()}
            onClick={() => checkAnswer(BooleanAnswers.FALSE)}
            disabled={
              selectedAnswers[BooleanAnswers.FALSE] ||
              selectedAnswers[correctAnswer]
            }
          >
            False
          </button>
        </div>
      </div>

      <button
        disabled={!selectedAnswers[correctAnswer]}
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
