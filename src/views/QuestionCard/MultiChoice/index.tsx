import { FC, useEffect, useState } from "react";
import { QuestionResponse } from "../../../constants";

type MultiChoiceCardProps = {
  questionData: QuestionResponse;
  incrementIndex: () => void;
};

const MultiChoiceCard: FC<MultiChoiceCardProps> = (props) => {
  const [options, setOptions] = useState<undefined | string[]>([
    ...props.questionData.incorrect_answers,
    props.questionData.correct_answer,
  ]);

  useEffect(() => {
    options && shuffle(options);
  });

  // Source: https://stackoverflow.com/a/2450976/12815672
  const shuffle = (arr: string[]) => {
    let currentIndex = arr.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex > 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [arr[currentIndex], arr[randomIndex]] = [
        arr[randomIndex],
        arr[currentIndex],
      ];
    }

    setOptions(arr);
  };

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
            <button className="choice-button" key={index}>
              {question}
            </button>
          );
        })}

        <button className="next-button" disabled={true}>
          Next Question
        </button>
      </div>
    </div>
  );
};

export default MultiChoiceCard;
