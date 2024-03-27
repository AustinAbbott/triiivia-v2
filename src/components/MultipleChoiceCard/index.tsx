import { FC, useState } from "react";
import { QuestionResponse } from "../../constants";
import { SelectedChoices } from "../../shared-types";
import { AccessScoreContext } from "../../views/Game";

type MultipleChoiceCardProps = {
  choices: string[];
  questionData: QuestionResponse;
  incrementIndex: () => void;
};

const MultipleChoiceCard: FC<MultipleChoiceCardProps> = (props) => {
  const [selectedChoices, setSelectedChoices] = useState<SelectedChoices>({});
  const { state, update } = AccessScoreContext();
  const correctAnswer = props.questionData.correct_answer;

  const handleSelection = (selection: string) => {
    const correctAnswerOnFirstTry =
      !Object.keys(selectedChoices).length && selection === correctAnswer;

    if (correctAnswerOnFirstTry) {
      update({ score: state?.score + 1 });
    }

    setSelectedChoices({ ...selectedChoices, [selection]: true });
  };

  const handleNextClick = () => {
    props.incrementIndex();
  };

  return (
    <div data-testid="MultipleChoiceCard">
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
                <span> 🎉</span>
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
          data-testid="MultipleChoiceNextButton"
        >
          Next Question
        </button>
      </div>
    </div>
  );
};

export default MultipleChoiceCard;
