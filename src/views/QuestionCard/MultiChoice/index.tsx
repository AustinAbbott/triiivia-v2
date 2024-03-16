import { FC, useState } from "react";
import { QuestionResponse } from "../../../constants";
import Utils from "../../../utils/utils";

type MultiChoiceCardProps = {
  questionData: QuestionResponse;
  incrementIndex: () => void;
};

const MultiChoiceCard: FC<MultiChoiceCardProps> = (props) => {
  const [selectedOption, setSelectedOption] = useState<undefined | string>();
  const correctAnswer = props.questionData.correct_answer;

  // TODO: fix this
  const options = Utils.shuffle([
    ...props.questionData.incorrect_answers,
    props.questionData.correct_answer,
  ]);

  return (
    <div>
      <div>
        <div className="question-container">
          <div>{props.questionData.question}</div>
        </div>
      </div>

      <div className="choice-container">
        {options?.map((question: string, index: number) => {
          return (
            <button
              className="choice-button"
              key={index}
              onClick={() => setSelectedOption(question)}
            >
              {question}
            </button>
          );
        })}

        <button
          className="next-button"
          disabled={selectedOption !== correctAnswer}
        >
          Next Question
        </button>
      </div>
    </div>
  );
};

export default MultiChoiceCard;
