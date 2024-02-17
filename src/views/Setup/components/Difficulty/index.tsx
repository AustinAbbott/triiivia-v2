import { FC } from "react";

type DifficultyProps = {
  setSelectedDifficulty: (arg: string) => void;
};

export const Difficulty: FC<DifficultyProps> = (props) => {
  return (
    <div>
      <select
        onChange={(e) => props.setSelectedDifficulty(e.currentTarget.value)}
      >
        <option disabled selected>
          -- select --
        </option>
        <option>Easy</option>
        <option>Medium</option>
        <option>Hard</option>
      </select>
    </div>
  );
};
