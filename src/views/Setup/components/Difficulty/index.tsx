import { FC } from "react";
import "../style.scss";
import { Dropdown } from "../../../../components/Dropdown";
import { DifficultyOptions } from "../../../../constants";

type DifficultyProps = {
  selectedDifficulty: string;
  setSelectedDifficulty: (arg: string) => void;
};

const Difficulty: FC<DifficultyProps> = (props) => {
  return (
    <div className="dropdown">
      <Dropdown
        options={[
          DifficultyOptions.EASY,
          DifficultyOptions.MEDIUM,
          DifficultyOptions.HARD,
        ]}
        placeholder="Difficulty"
        selectedOption={props.selectedDifficulty}
        setSelectedOption={props.setSelectedDifficulty}
      />
    </div>
  );
};

export default Difficulty;
