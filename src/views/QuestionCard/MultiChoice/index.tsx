import { FC, useState } from "react";
import { QuestionResponse } from "../../../constants";
import { SelectedChoices } from "../../../shared-types";

type MultiChoiceCardProps = {
  choices: string[];
  questionData: QuestionResponse;
  incrementIndex: () => void;
};

const MultiChoiceCard: FC<MultiChoiceCardProps> = (props) => {
  const [selectedChoices, setSelectedChoices] = useState<SelectedChoices>({});
  const correctAnswer = props.questionData.correct_answer;

  const handleSelection = (selection: string) => {
    setSelectedChoices({ ...selectedChoices, [selection]: true });
  };

  const handleNextClick = () => {
    props.incrementIndex();
  };

  return (
    <div data-testid="MultiChoiceCard">
      <div>
        <div className="question-container">
          <div>{props.questionData.question}</div>
        </div>
      </div>

      <div className="choice-container">
        {props.choices?.map((choice: string, index: number) => {
          return (
            <button
              className="choice-button"
              key={index}
              onClick={() => handleSelection(choice)}
              disabled={
                selectedChoices[choice] || selectedChoices[correctAnswer]
              }
            >
              {choice}

              {selectedChoices[choice] && choice === correctAnswer && (
                <span> ✅</span>
              )}

              {selectedChoices[choice] && choice !== correctAnswer && (
                <span> ❌</span>
              )}
            </button>
          );
        })}

        <button
          className="next-button"
          disabled={!selectedChoices[correctAnswer]}
          onClick={handleNextClick}
          data-testid="MultiChoiceNextButton"
        >
          Next Question
        </button>
      </div>
    </div>
  );
};

export default MultiChoiceCard;
