import { FC, useState } from "react";
import { BooleanAnswers, QuestionResponse } from "../../../constants";
import { SelectedChoices } from "../../../shared-types";

type TrueOrFalseCardProps = {
  questionData: QuestionResponse;
  incrementIndex: () => void;
};

const TrueOrFalseCard: FC<TrueOrFalseCardProps> = (props) => {
  const [selectedAnswers, setSelectedAnswers] = useState<SelectedChoices>({});
  const correctAnswer = props.questionData.correct_answer;

  const checkAnswer = (answer: BooleanAnswers) => {
    setSelectedAnswers({ ...selectedAnswers, [answer]: true });
  };

  const handleNextClick = () => {
    props.incrementIndex();
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
            className="choice-button"
            onClick={() => checkAnswer(BooleanAnswers.TRUE)}
            disabled={
              selectedAnswers[BooleanAnswers.TRUE] ||
              selectedAnswers[correctAnswer]
            }
          >
            <span>True</span>

            {selectedAnswers[BooleanAnswers.TRUE] &&
              BooleanAnswers.TRUE === correctAnswer && <span> ✅</span>}

            {selectedAnswers[BooleanAnswers.TRUE] &&
              BooleanAnswers.TRUE !== correctAnswer && <span> ❌</span>}
          </button>
          <button
            className="choice-button"
            onClick={() => checkAnswer(BooleanAnswers.FALSE)}
            disabled={
              selectedAnswers[BooleanAnswers.FALSE] ||
              selectedAnswers[correctAnswer]
            }
          >
            <span>False</span>

            {selectedAnswers[BooleanAnswers.FALSE] &&
              BooleanAnswers.FALSE === correctAnswer && <span> ✅</span>}

            {selectedAnswers[BooleanAnswers.FALSE] &&
              BooleanAnswers.FALSE !== correctAnswer && <span> ❌</span>}
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
