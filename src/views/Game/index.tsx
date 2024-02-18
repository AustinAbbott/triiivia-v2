import { FC } from "react";
import { QuestionResponse } from "../../constants";

type GameProps = {
  questions?: QuestionResponse[];
};

export const Game: FC<GameProps> = (props) => {
  if (!props.questions) return null;

  return (
    <div>
      {props.questions?.map((question) => (
        <div>{question.question}</div>
      ))}
    </div>
  );
};
