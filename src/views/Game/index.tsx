import { FC, ReactElement, useState } from "react";
import { QuestionResponse } from "../../constants";
import { QuestionCard } from "../QuestionCard";

type GameProps = {
  questions?: QuestionResponse[];
};

export const Game: FC<GameProps> = (props) => {
  const [cardIndex, setCardIndex] = useState<number>(0);

  if (!props.questions) return null;

  const incrementIndex = () => {
    setCardIndex(cardIndex + 1);
  };

  const questionCards: ReactElement[] = props.questions.map(
    (questionData: QuestionResponse, index: number) => (
      <QuestionCard
        index={index}
        questionData={questionData}
        incrementIndex={incrementIndex}
      />
    )
  );

  return <div>{questionCards[cardIndex]}</div>;
};
