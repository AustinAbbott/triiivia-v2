import { FC } from "react";
import { Modes } from "../../../../constants";
import "../style.scss";
import { Dropdown } from "../../../../components/Dropdown";

type ModeProps = {
  disabled: boolean;
  selectedMode?: Modes;
  setSelectedMode: (arg: Modes) => void;
};

const Mode: FC<ModeProps> = (props) => {
  return (
    <div className="drop-down-container">
      <Dropdown
        disabled={props.disabled}
        options={[Modes.MULTIPLE_CHOICE, Modes.TRUE_FALSE]}
        placeholder="Mode"
        selectedOption={props.selectedMode}
        setSelectedOption={props.setSelectedMode}
        testId="Mode"
      />
    </div>
  );
};

export default Mode;
