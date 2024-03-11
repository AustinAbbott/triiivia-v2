import { FC } from "react";
import { QuestionResponse, TypeResponse } from "../../constants";

import "./style.scss";
import TrueOrFalseCard from "./TrueOrFalse";
import MultiChoiceCard from "./MultiChoice";

type QuestionCardProps = {
  index: number;
  questionData: QuestionResponse;
  incrementIndex: () => void;
};

export const QuestionCard: FC<QuestionCardProps> = (props) => {
  switch (props.questionData.type) {
    case TypeResponse.TRUE_FALSE:
      return (
        <TrueOrFalseCard
          incrementIndex={props.incrementIndex}
          // React key to differentiate cards
          // See https://austinabbott.dev/blog/react-key/ for reference
          key={props.index}
          questionData={props.questionData}
        />
      );
    case TypeResponse.MULTIPLE_CHOICE:
      return (
        <MultiChoiceCard
          incrementIndex={props.incrementIndex}
          // React key to differentiate cards
          // See https://austinabbott.dev/blog/react-key/ for reference
          key={props.index}
          questionData={props.questionData}
        />
      );
    default:
      return null;
  }
};
