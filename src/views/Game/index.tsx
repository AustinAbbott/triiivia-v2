import { FC, ReactElement, useState } from "react";
import { QuestionResponse } from "../../constants";
import { QuestionCard } from "../QuestionCard";

type GameProps = {
  questions?: QuestionResponse[];
};

export const Game: FC<GameProps> = (props) => {
  const [index, setIndex] = useState<number>(0);

  if (!props.questions) return null;

  const incrementIndex = () => {
    setIndex(index + 1);
  };

  const questionCards: ReactElement[] = props.questions?.map((questionData) => (
    <QuestionCard
      index={index}
      questionData={questionData}
      incrementIndex={incrementIndex}
    />
  ));

  return <div>{questionCards[index]}</div>;
};
