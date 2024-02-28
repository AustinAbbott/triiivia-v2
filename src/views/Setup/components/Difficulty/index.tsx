import { FC } from "react";
import "../style.scss";
import { Dropdown } from "../../../../components/Dropdown";
import { AvailableQuestionsResponse } from "../../../../constants";
import Utils from "../../../../utils/utils";

type DifficultyProps = {
  disabled: boolean;
  availableQuestions?: AvailableQuestionsResponse;
  selectedDifficulty: string;
  setSelectedDifficulty: (arg: string) => void;
};

const Difficulty: FC<DifficultyProps> = (props) => {
  return (
    <div className="drop-down-container">
      <Dropdown
        disabled={props.disabled}
        options={Utils.generateDifficultyLevels(props.availableQuestions)}
        placeholder="Difficulty"
        selectedOption={props.selectedDifficulty}
        setSelectedOption={props.setSelectedDifficulty}
        testId="Difficulty"
      />
    </div>
  );
};

export default Difficulty;
