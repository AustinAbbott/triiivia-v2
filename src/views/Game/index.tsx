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
import { QuestionCard } from "../../components/QuestionCard";
import { FinishScreen } from "../FinishScreen";

import "./style.scss";

type GameProps = {
  questions?: QuestionResponse[];
  setQuestions: (arg: QuestionResponse[] | undefined) => void;
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
    <FinishScreen score={state.score} total={props.questions.length} />,
  ];

  return (
    <div data-testid="Game">
      {questionCards[cardIndex]}
      <button
        className="reset-game"
        onClick={() => props.setQuestions(undefined)}
      >
        Reset Game
      </button>
    </div>
  );
};
