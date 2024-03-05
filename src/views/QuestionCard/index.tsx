import { FC, useState } from "react";
import {
  BooleanAnswers,
  QuestionResponse,
  TypeResponse,
} from "../../constants";

import "./style.scss";

type QuestionCardProps = {
  questionData: QuestionResponse;
  incrementIndex: () => void;
};

type TrueOrFalseCardProps = {
  questionData: QuestionResponse;
  incrementIndex: () => void;
};

type SelectedAnswers = {
  falseSelected: boolean;
  trueSelected: boolean;
};

export const TrueOrFalseCard: FC<TrueOrFalseCardProps> = (props) => {
  const [correctAnswerSelected, setCorrectAnswerSelected] =
    useState<boolean>(false);
  const [selectedAnswers, setSelectedAnswers] = useState<SelectedAnswers>({
    falseSelected: false,
    trueSelected: false,
  });
  const correctAnswer = props.questionData.correct_answer;

  if (props.questionData.type !== TypeResponse.TRUE_FALSE) return null;

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
    // TODO: figure out why we have to do this
    setCorrectAnswerSelected(false);
    setSelectedAnswers({ trueSelected: false, falseSelected: false });
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

export const QuestionCard: FC<QuestionCardProps> = (props) => {
  if (props.questionData.type === TypeResponse.TRUE_FALSE) {
    return (
      <TrueOrFalseCard
        questionData={props.questionData}
        incrementIndex={props.incrementIndex}
      />
    );
  }

  if (props.questionData.type === TypeResponse.MULTIPLE_CHOICE) {
    return (
      <div>
        <div>
          <h4>{props.questionData.question}</h4>
        </div>
      </div>
    );
  }

  return null;
};
