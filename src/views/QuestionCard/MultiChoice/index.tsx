import { FC, useState } from "react";
import { QuestionResponse } from "../../../constants";

type MultiChoiceCardProps = {
  choices: string[];
  questionData: QuestionResponse;
  incrementIndex: () => void;
};

const MultiChoiceCard: FC<MultiChoiceCardProps> = (props) => {
  const [selectedOption, setSelectedOption] = useState<undefined | string>();
  const correctAnswer = props.questionData.correct_answer;

  return (
    <div>
      <div>
        <div className="question-container">
          <div>{props.questionData.question}</div>
        </div>
      </div>

      <div className="choice-container">
        {props.choices?.map((question: string, index: number) => {
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
