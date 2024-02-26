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

export const TrueOrFalseCard: FC<TrueOrFalseCardProps> = (props) => {
  const [correctAnswerSelected, setCorrectAnswerSelected] =
    useState<boolean>(false);
  const correctAnswer = props.questionData.correct_answer;

  if (props.questionData.type !== TypeResponse.TRUE_FALSE) return null;

  const checkAnswer = (answer: BooleanAnswers) => {
    if (answer === correctAnswer) {
      console.log("Yahoo!!");
      setCorrectAnswerSelected(true);
    } else {
      console.log("aww, bummer");
    }
  };

  const handleNextClick = () => {
    props.incrementIndex();
    setCorrectAnswerSelected(false);
  };

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
            disabled={
              correctAnswerSelected && correctAnswer !== BooleanAnswers.TRUE
            }
          >
            True
          </button>
          <button
            className="choice-button"
            onClick={() => checkAnswer(BooleanAnswers.FALSE)}
            disabled={
              correctAnswerSelected && correctAnswer !== BooleanAnswers.FALSE
            }
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
