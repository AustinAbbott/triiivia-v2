import { FC, useState } from "react";
import { BooleanAnswers, QuestionResponse } from "../../../constants";
import "./style.scss";

type TrueOrFalseCardProps = {
  questionData: QuestionResponse;
  incrementIndex: () => void;
};

type SelectedAnswers = {
  falseSelected: boolean;
  trueSelected: boolean;
};

const TrueButtonIcon = (props: {
  correctAnswer: string;
  selectedAnswers: SelectedAnswers;
}) => {
  switch (props.correctAnswer) {
    case BooleanAnswers.TRUE:
      if (props.selectedAnswers.trueSelected) {
        return <span> ✅</span>;
      }
      return null;
    case BooleanAnswers.FALSE:
      if (
        props.selectedAnswers.trueSelected ||
        props.selectedAnswers.falseSelected
      ) {
        return <span> ❌</span>;
      }
      return null;
    default:
      return null;
  }
};

const FalseButtonIcon = (props: {
  correctAnswer: string;
  selectedAnswers: SelectedAnswers;
}) => {
  switch (props.correctAnswer) {
    case BooleanAnswers.FALSE:
      if (props.selectedAnswers.falseSelected) {
        return <span> ✅</span>;
      }
      return null;
    case BooleanAnswers.TRUE:
      if (
        props.selectedAnswers.falseSelected ||
        props.selectedAnswers.trueSelected
      ) {
        return <span> ❌</span>;
      }
      return null;
    default:
      return null;
  }
};

const TrueOrFalseCard: FC<TrueOrFalseCardProps> = (props) => {
  const [correctAnswerSelected, setCorrectAnswerSelected] =
    useState<boolean>(false);
  const [selectedAnswers, setSelectedAnswers] = useState<SelectedAnswers>({
    falseSelected: false,
    trueSelected: false,
  });
  const correctAnswer = props.questionData.correct_answer;

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
    <div>
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
            <span>True</span>
            <TrueButtonIcon
              correctAnswer={correctAnswer}
              selectedAnswers={selectedAnswers}
            />
          </button>
          <button
            className="choice-button"
            onClick={() => checkAnswer(BooleanAnswers.FALSE)}
            disabled={falseDisabled}
          >
            <span>False</span>
            <FalseButtonIcon
              correctAnswer={correctAnswer}
              selectedAnswers={selectedAnswers}
            />
          </button>
        </div>
      </div>

      <button
        disabled={!correctAnswerSelected}
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
