import { FC } from "react";
import { Modes } from "../../../../constants";
import "../style.css";
import { Dropdown } from "../../../../components/Dropdown";

type ModeProps = {
  selectedMode?: string;
  setSelectedMode: (arg: string) => void;
};

export const Mode: FC<ModeProps> = (props) => {
  return (
    <div className="dropdown">
      <Dropdown
        label="Mode"
        options={[Modes.MULTIPLE_CHOICE, Modes.TRUE_FALSE]}
        selectedOption={props.selectedMode}
        setSelectedOption={props.setSelectedMode}
      />
    </div>
  );
};
