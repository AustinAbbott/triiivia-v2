import { FC, useState } from "react";
import { QuestionResponse } from "../../constants";
import { QuestionCard } from "../QuestionCard";

type GameProps = {
  questions?: QuestionResponse[];
};

export const Game: FC<GameProps> = (props) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  if (!props.questions) return null;

  const incrementIndex = () => {
    setCurrentIndex(currentIndex + 1);
  };

  const questionList = props.questions?.map((questionData) => (
    <QuestionCard incrementIndex={incrementIndex} questionData={questionData} />
  ));

  return <div>{questionList[currentIndex]}</div>;
};
