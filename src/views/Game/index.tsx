import {
  Dispatch,
  FC,
  ReactElement,
  createContext,
  useContext,
  useReducer,
  useState,
} from "react";
import { QuestionResponse } from "../../constants";
import { QuestionCard } from "../QuestionCard";

type GameProps = {
  questions?: QuestionResponse[];
};

type ScoreObject = {
  score: number;
};

export interface ScoreContextType {
  state: ScoreObject;
  update: Dispatch<ScoreObject>;
}

export const ScoreContext = createContext<ScoreContextType | null>(null);

export const AccessScoreContext = () => {
  const context = useContext<ScoreContextType | null>(ScoreContext);

  if (!context) {
    throw new Error("Score unavailable");
  }

  return context;
};

export const Game: FC<GameProps> = (props) => {
  const [cardIndex, setCardIndex] = useState<number>(0);
  const [state, update] = useReducer(
    (state: ScoreObject, pair: any) => ({ ...state, ...pair }),
    { score: 0 }
  );

  if (!props.questions) return null;

  const incrementIndex = () => {
    setCardIndex(cardIndex + 1);
  };

  const contextValue: ScoreContextType = {
    state,
    update,
  };

  const questionCards: ReactElement[] = [
    ...props.questions.map((questionData: QuestionResponse, index: number) => (
      <ScoreContext.Provider value={contextValue}>
        <QuestionCard
          index={index}
          questionData={questionData}
          incrementIndex={incrementIndex}
        />
      </ScoreContext.Provider>
    )),
    // TODO: Add finish screen here
    <div>{state.score}</div>,
  ];

  return <div>{questionCards[cardIndex]}</div>;
};
