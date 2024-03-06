import { FC } from "react";
import { QuestionResponse, TypeResponse } from "../../constants";

import "./style.scss";
import TrueOrFalseCard from "./TrueOrFalse";

type QuestionCardProps = {
  key: number;
  questionData: QuestionResponse;
  incrementIndex: () => void;
};

export const QuestionCard: FC<QuestionCardProps> = (props) => {
  switch (props.questionData.type) {
    case TypeResponse.TRUE_FALSE:
      return (
        <TrueOrFalseCard
          key={props.key}
          questionData={props.questionData}
          incrementIndex={props.incrementIndex}
        />
      );
    case TypeResponse.MULTIPLE_CHOICE:
      return (
        <div>
          <div>
            <h4>{props.questionData.question}</h4>
          </div>
        </div>
      );
    default:
      return null;
  }
};
