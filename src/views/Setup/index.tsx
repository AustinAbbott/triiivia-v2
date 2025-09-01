import { FC, useState } from "react";
import Categories from "./components/Categories";
import Difficulty from "./components/Difficulty";
import Mode from "./components/Mode";
import NumberOfQuestions from "./components/NumberOfQuestions";
import {
  AvailableQuestionsResponse,
  Category,
  Modes,
  QuestionResponse,
} from "../../constants";
import TriviaApi from "../../TriviaApi";

import "./style.scss";
import StartButton from "../../components/StartButton";
import Utils from "../../utils/utils";

type SetupProps = {
  setQuestions: (arg: QuestionResponse[]) => void;
};

export const Setup: FC<SetupProps> = (props) => {
  const [availableQuestions, setAvailableQuestions] = useState<
    undefined | AvailableQuestionsResponse
  >(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<
    undefined | Category
  >(undefined);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("");
  const [selectedMode, setSelectedMode] = useState<Modes | "">("");
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

  const handleStartClick = async (): Promise<void> => {
    if (!selectedMode) return;

    const requestUrl = `api.php?amount=${selectedNumberOfQuestions}&category=${
      selectedCategory?.id
    }&difficulty=${selectedDifficulty.toLowerCase()}&type=${Utils.getSelectedModeParam(
      selectedMode
    )}&encode=base64`;

    setLoading(true);
    const apiResponse = await TriviaApi.getQuestions(requestUrl);
    setLoading(false);
    props.setQuestions(apiResponse);
  };

  return (
    <div className="setup-container">
      <Categories
        loading={loading}
        selectedCategory={selectedCategory}
        setAvailableQuestions={setAvailableQuestions}
        setLoading={setLoading}
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
        loading={loading}
        readyToGo={readyToGo()}
        handleStartClick={handleStartClick}
      />

      {/* TODO: Make prettier loading behavior */}
      {loading && <div>Loading...</div>}
    </div>
  );
};
