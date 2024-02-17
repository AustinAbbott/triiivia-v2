import { FC } from "react";
import { ModeChoices } from "../../../../constants";

type ModeProps = {
  setSelectedMode: (arg: string) => void;
};

export const Mode: FC<ModeProps> = (props) => {
  return (
    <div>
      <select onChange={(e) => props.setSelectedMode(e.currentTarget.value)}>
        <option disabled selected>
          -- select --
        </option>
        <option>{ModeChoices.MULTIPLE_CHOICE}</option>
        <option>{ModeChoices.TRUE_FALSE}</option>
      </select>
    </div>
  );
};
