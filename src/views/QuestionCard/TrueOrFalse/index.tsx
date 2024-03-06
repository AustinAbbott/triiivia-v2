import { FC, useEffect, useState } from "react";
import { BooleanAnswers, QuestionResponse } from "../../../constants";

type TrueOrFalseCardProps = {
  key: number;
  questionData: QuestionResponse;
  incrementIndex: () => void;
};

type SelectedAnswers = {
  falseSelected: boolean;
  trueSelected: boolean;
};

const TrueOrFalseCard: FC<TrueOrFalseCardProps> = (props) => {
  const [correctAnswerSelected, setCorrectAnswerSelected] =
    useState<boolean>(false);
  const [selectedAnswers, setSelectedAnswers] = useState<SelectedAnswers>({
    falseSelected: false,
    trueSelected: false,
  });
  const correctAnswer = props.questionData.correct_answer;

  useEffect(() => {
    return () => {
      setCorrectAnswerSelected(false);
      setSelectedAnswers({ falseSelected: false, trueSelected: false });
    };
  }, []);

  const checkAnswer = (answer: BooleanAnswers) => {
    if (answer === correctAnswer) {
      setCorrectAnswerSelected(true);
    }

    switch (answer) {
      case BooleanAnswers.FALSE:
        setSelectedAnswers({ ...selectedAnswers, falseSelected: true });
        break;
      case BooleanAnswers.TRUE:
        setSelectedAnswers({ ...selectedAnswers, trueSelected: true });
        break;
      default:
        break;
    }
  };

  const handleNextClick = () => {
    props.incrementIndex();
  };

  const falseDisabled =
    selectedAnswers.falseSelected ||
    (correctAnswerSelected && correctAnswer !== BooleanAnswers.FALSE);

  const trueDisabled =
    selectedAnswers.trueSelected ||
    (correctAnswerSelected && correctAnswer !== BooleanAnswers.TRUE);

  return (
    <div key={`${props.key}`}>
      <div>
        <div className="question-container">
          <div>True or False?</div>
          <div>{props.questionData.question}</div>
        </div>
        <div className="choice-container">
          <button
            className="choice-button"
            onClick={() => checkAnswer(BooleanAnswers.TRUE)}
            disabled={trueDisabled}
          >
            True
          </button>
          <button
            className="choice-button"
            onClick={() => checkAnswer(BooleanAnswers.FALSE)}
            disabled={falseDisabled}
          >
            False
          </button>
        </div>
      </div>

      <button
        disabled={!correctAnswerSelected}
        onClick={handleNextClick}
        type="button"
      >
        Next Question
      </button>
    </div>
  );
};

export default TrueOrFalseCard;
