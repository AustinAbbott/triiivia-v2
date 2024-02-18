import { FC } from "react";
import "../style.css";
import { Dropdown } from "../../../../components/Dropdown";

type DifficultyProps = {
  selectedDifficulty: string;
  setSelectedDifficulty: (arg: string) => void;
};

const Difficulty: FC<DifficultyProps> = (props) => {
  return (
    <div className="dropdown">
      <Dropdown
        options={["Easy", "Medium", "Hard"]}
        placeholder="Difficulty"
        selectedOption={props.selectedDifficulty}
        setSelectedOption={props.setSelectedDifficulty}
      />
    </div>
  );
};

export default Difficulty;
