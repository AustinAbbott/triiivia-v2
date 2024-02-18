import { FC } from "react";
import "../style.css";
import { Dropdown } from "../../../../components/Dropdown";

type DifficultyProps = {
  selectedDifficulty: string;
  setSelectedDifficulty: (arg: string) => void;
};

export const Difficulty: FC<DifficultyProps> = (props) => {
  return (
    <div className="dropdown">
      <Dropdown
        label="Difficulty"
        options={["Easy", "Medium", "Hard"]}
        selectedOption={props.selectedDifficulty}
        setSelectedOption={props.setSelectedDifficulty}
      />
    </div>
  );
};
