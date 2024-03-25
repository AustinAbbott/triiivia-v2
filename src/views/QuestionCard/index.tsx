import { FC, useMemo } from "react";
import { QuestionResponse, TypeResponse } from "../../constants";

import "./style.scss";
import TrueOrFalseCard from "./TrueOrFalse";
import MultiChoiceCard from "./MultiChoice";
import Utils from "../../utils/utils";

type QuestionCardProps = {
  index: number;
  questionData: QuestionResponse;
  incrementIndex: () => void;
};

export const QuestionCard: FC<QuestionCardProps> = (props) => {
  const shuffledChoices = useMemo(() => {
    return Utils.shuffle([
      ...props.questionData.incorrect_answers,
      props.questionData.correct_answer,
    ]);
  }, [props.questionData]);

  switch (props.questionData.type) {
    case TypeResponse.TRUE_FALSE:
      return (
        <TrueOrFalseCard
          // React key to differentiate cards
          // See https://austinabbott.dev/blog/react-key/ for reference
          key={props.index}
          questionData={props.questionData}
          incrementIndex={props.incrementIndex}
        />
      );
    case TypeResponse.MULTIPLE_CHOICE:
      return (
        <MultiChoiceCard
          choices={shuffledChoices}
          // React key to differentiate cards
          // See https://austinabbott.dev/blog/react-key/ for reference
          key={props.index}
          questionData={props.questionData}
          incrementIndex={props.incrementIndex}
        />
      );
    default:
      return null;
  }
};
