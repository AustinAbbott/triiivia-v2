import { FC, useState } from "react";
import { Categories } from "./components/CategoryList";
import { Difficulty } from "./components/Difficulty";
import { Mode } from "./components/Mode";
import { NumberOfQuestions } from "./components/NumberOfQuestions";
import {
  API_BASE_URL,
  Category,
  ModeChoices,
  QuestionResponse,
} from "../../constants";

type SetupProps = {
  // TODO: use questions type here
  setQuestions: (arg: QuestionResponse[]) => void;
};

export const Setup: FC<SetupProps> = (props) => {
  const [selectedCategory, setSelectedCategory] = useState<
    Category | undefined
  >();
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
      case ModeChoices.MULTIPLE_CHOICE:
        return "multiple";
      case ModeChoices.TRUE_FALSE:
        return "boolean";
      default:
        return "";
    }
  };

  const handleStartClick = () => {
    if (!readyToGo) return;

    // TODO: probably break this all out
    const requestUrl = `${API_BASE_URL}api.php?amount=${selectedNumberOfQuestions}&category=${
      selectedCategory?.id
    }&difficulty=${selectedDifficulty.toLowerCase()}&type=${getSelectedModeParam()}`;

    fetch(requestUrl).then((res: Response) =>
      props.setQuestions(res.json() as any)
    );
  };

  return (
    <div>
      <NumberOfQuestions
        setSelectedNumberOfQuestions={setSelectedNumberOfQuestions}
      />
      <Categories setSelectedCategory={setSelectedCategory} />
      <Difficulty setSelectedDifficulty={setSelectedDifficulty} />
      <Mode setSelectedMode={setSelectedMode} />

      <button disabled={!readyToGo()} onClick={handleStartClick}>
        Start
      </button>
    </div>
  );
};
