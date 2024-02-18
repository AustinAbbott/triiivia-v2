import { FC } from "react";
import { Modes } from "../../../../constants";
import "../style.css";

type ModeProps = {
  setSelectedMode: (arg: string) => void;
};

export const Mode: FC<ModeProps> = (props) => {
  return (
    <div className="dropdown">
      <label htmlFor="mode">Choose a mode: </label>
      <select
        id="mode"
        onChange={(e) => props.setSelectedMode(e.currentTarget.value)}
      >
        <option disabled selected>
          -- select --
        </option>
        <option>{Modes.MULTIPLE_CHOICE}</option>
        <option>{Modes.TRUE_FALSE}</option>
      </select>
    </div>
  );
};
