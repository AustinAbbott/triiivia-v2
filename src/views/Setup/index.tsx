import { FC, useState } from "react";
import Categories from "./components/Categories";
import Difficulty from "./components/Difficulty";
import Mode from "./components/Mode";
import NumberOfQuestions from "./components/NumberOfQuestions";
import {
  API_BASE_URL,
  Category,
  Modes,
  QuestionResponse,
} from "../../constants";
import TriviaApi from "../../TriviaApi";

import "./style.css";

type SetupProps = {
  setQuestions: (arg: QuestionResponse[]) => void;
};

export const Setup: FC<SetupProps> = (props) => {
  const [selectedCategory, setSelectedCategory] = useState<Category>();
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("");
  const [selectedMode, setSelectedMode] = useState<string>("");
  const [selectedNumberOfQuestions, setSelectedNumberOfQuestions] =
    useState<string>("");

  const readyToGo = () => {
    return (
      selectedCategory &&
      selectedDifficulty &&
      selectedMode &&
      selectedNumberOfQuestions
    );
  };

  const getSelectedModeParam = () => {
    switch (selectedMode) {
      case Modes.MULTIPLE_CHOICE:
        return "multiple";
      case Modes.TRUE_FALSE:
        return "boolean";
      default:
        return "";
    }
  };

  const handleStartClick = async () => {
    if (!readyToGo) return;

    const requestUrl = `${API_BASE_URL}api.php?amount=${selectedNumberOfQuestions}&category=${
      selectedCategory?.id
    }&difficulty=${selectedDifficulty.toLowerCase()}&type=${getSelectedModeParam()}&encode=base64`;

    const apiResponse = await TriviaApi.getQuestions(requestUrl);

    props.setQuestions(apiResponse);
  };

  return (
    <div className="setup-container">
      <Categories
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <NumberOfQuestions
        selectedNumberOfQuestions={selectedNumberOfQuestions}
        setSelectedNumberOfQuestions={setSelectedNumberOfQuestions}
      />
      <Difficulty
        selectedDifficulty={selectedDifficulty}
        setSelectedDifficulty={setSelectedDifficulty}
      />
      <Mode selectedMode={selectedMode} setSelectedMode={setSelectedMode} />

      <button disabled={!readyToGo()} onClick={handleStartClick}>
        Start
      </button>
    </div>
  );
};
