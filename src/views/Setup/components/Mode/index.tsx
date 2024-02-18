import { FC } from "react";
import { Modes } from "../../../../constants";
import "../style.css";
import { Dropdown } from "../../../../components/Dropdown";

type ModeProps = {
  selectedMode?: string;
  setSelectedMode: (arg: string) => void;
};

const Mode: FC<ModeProps> = (props) => {
  return (
    <div className="dropdown">
      <Dropdown
        options={[Modes.MULTIPLE_CHOICE, Modes.TRUE_FALSE]}
        placeholder="Mode"
        selectedOption={props.selectedMode}
        setSelectedOption={props.setSelectedMode}
      />
    </div>
  );
};

export default Mode;
