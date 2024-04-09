import { FC, useState } from "react";
import Categories from "./components/Categories";
import Difficulty from "./components/Difficulty";
import Mode from "./components/Mode";
import NumberOfQuestions from "./components/NumberOfQuestions";
import {
  AvailableQuestionsResponse,
  Category,
  QuestionResponse,
} from "../../constants";
import TriviaApi from "../../TriviaApi";

import "./style.scss";
import StartButton from "../../components/StartButton";
import Utils from "../../utils/utils";

type SetupProps = {
  loading: boolean;
  setApiError: (arg: any) => void;
  setLoading: (arg: boolean) => void;
  setQuestions: (arg: QuestionResponse[]) => void;
};

export const Setup: FC<SetupProps> = (props) => {
  const [availableQuestions, setAvailableQuestions] = useState<
    undefined | AvailableQuestionsResponse
  >(undefined);
  const [selectedCategory, setSelectedCategory] = useState<
    undefined | Category
  >(undefined);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("");
  const [selectedMode, setSelectedMode] = useState<string>("");
  const [selectedNumberOfQuestions, setSelectedNumberOfQuestions] =
    useState<string>("");

  const readyToGo = (): boolean => {
    return (
      !!selectedCategory &&
      !!selectedDifficulty &&
      !!selectedMode &&
      !!selectedNumberOfQuestions
    );
  };

  const fetchQuestions = async (): Promise<void> => {
    const requestUrl = `api.php?amount=${selectedNumberOfQuestions}&category=${
      selectedCategory?.id
    }&difficulty=${selectedDifficulty.toLowerCase()}&type=${Utils.getSelectedModeParam(
      selectedMode
    )}&encode=base64`;

    props.setLoading(true);
    TriviaApi.getQuestions(requestUrl)
      .then((response) => props.setQuestions(response))
      .catch((e) => props.setApiError(e))
      .finally(() => props.setLoading(false));
  };

  const handleStartClick = async (): Promise<void> => {
    props.setLoading(true);
    setTimeout(fetchQuestions, 1000);
  };

  return (
    <div className="setup-container">
      <Categories
        loading={props.loading}
        selectedCategory={selectedCategory}
        setAvailableQuestions={setAvailableQuestions}
        setLoading={props.setLoading}
        setSelectedCategory={setSelectedCategory}
      />
      <Difficulty
        disabled={!selectedCategory}
        availableQuestions={availableQuestions}
        selectedDifficulty={selectedDifficulty}
        setSelectedDifficulty={setSelectedDifficulty}
      />
      <NumberOfQuestions
        availableQuestions={availableQuestions}
        disabled={!selectedDifficulty}
        selectedDifficulty={selectedDifficulty}
        selectedNumberOfQuestions={selectedNumberOfQuestions}
        setSelectedNumberOfQuestions={setSelectedNumberOfQuestions}
      />
      <Mode
        disabled={!selectedNumberOfQuestions}
        selectedMode={selectedMode}
        setSelectedMode={setSelectedMode}
      />

      <StartButton
        loading={props.loading}
        readyToGo={readyToGo()}
        handleStartClick={handleStartClick}
      />
    </div>
  );
};
