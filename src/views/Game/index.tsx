import { FC, ReactElement, createContext, useReducer, useState } from "react";
import { QuestionResponse } from "../../constants";
import { QuestionCard } from "../QuestionCard";

type GameProps = {
  questions?: QuestionResponse[];
};

const initialState = { score: 0 };
export const ScoreContext: any = createContext(initialState);
const reducer = (state: any, pair: any) => ({ ...state, ...pair });

export const Game: FC<GameProps> = (props) => {
  const [cardIndex, setCardIndex] = useState<number>(0);
  const [state, update] = useReducer(reducer, initialState);

  if (!props.questions) return null;

  const incrementIndex = () => {
    setCardIndex(cardIndex + 1);
  };

  const questionCards: ReactElement[] = props.questions.map(
    (questionData: QuestionResponse, index: number) => (
      <ScoreContext.Provider value={{ state, update }}>
        <QuestionCard
          index={index}
          questionData={questionData}
          incrementIndex={incrementIndex}
        />
      </ScoreContext.Provider>
    )
  );

  return <div>{questionCards[cardIndex]}</div>;
};
