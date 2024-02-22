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

export const QuestionCard: FC<QuestionCardProps> = (props) => {
  const [enableNextButton, setEnableNextButton] = useState<boolean>(false);

  if (props.questionData.type === TypeResponse.TRUE_FALSE) {
    const checkAnswer = (answer: BooleanAnswers) => {
      if (answer === props.questionData.correct_answer) {
        console.log("Yahoo!!");
        setEnableNextButton(true);
      } else {
        console.log("aww, bummer");
      }
    };

    const handleNextClick = () => {
      props.incrementIndex();
      setEnableNextButton(false);
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
            >
              True
            </button>
            <button
              className="choice-button"
              onClick={() => checkAnswer(BooleanAnswers.FALSE)}
            >
              False
            </button>
          </div>
        </div>

        <button
          disabled={!enableNextButton}
          onClick={handleNextClick}
          type="button"
        >
          Next Question
        </button>
      </div>
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
